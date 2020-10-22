var Express = require('express');
var Tags = require('../Validator.js').Tags;
var async = require('async');
var {Session, router} = require('../Session.js');

var router = Express.Router({ caseSensitive: true });

router.baseURL = '/Prss';
const maxEmailLength = 150;
const maxFirstNameLength = 30;
const maxLastNameLength = 50;
const maxPasswordLength = 50;

router.get('/', function(req, res) {
   var email = req.query.email;

   var handler = function(err, prsArr, fields) {
      if (prsArr.length) {
         res.json(prsArr);
      } else {
         res.json([]);
      }
      req.cnn.release();
   };

   if (email) {
      //if query
      if (req.session.isAdmin()) {
         req.cnn.chkQry('select id, email from Person where email like ?', 
          [email + '%'], handler);
      } else {
         if (req.session.email.includes(req.query.email)) {
            req.cnn.chkQry('select id, email from Person where email = ?', 
             [req.session.email], handler);
         } else {
            handler(null, [], null);
         }
      }
   } else {
      //if no query
      if (req.session.isAdmin()) {
         req.cnn.chkQry('select id, email from Person', [], handler);
      } else {
         req.cnn.chkQry('select id, email from Person where email = ?', 
          [req.session.email], handler);
      }
   }
});

router.post('/', function(req, res) {
   var vld = req.validator;
   var body = req.body;
   var admin = req.session && req.session.isAdmin();
   var cnn = req.cnn;

   if (admin && !body.password) {
      body.password = '*';
   }
   body.whenRegistered = new Date().getTime();

   async.waterfall([
   function(cb) {
      if (vld.hasFields(body, ["email", "password", "role", "lastName"], cb) &&
       vld.chain(("email" in body) && body.email && body.email !== null && 
       body.email !== "", Tags.missingField, ["email"])
       .chain(("role" in body) && body.role !== null && body.role !== "", 
       Tags.missingField, ["role"])
       .chain(("password" in body) && body.password !== null && 
       body.password !== "" || admin, Tags.missingField, ["password"])
       .check(("lastName" in body) && body.lastName !== null && 
       body.lastName !== "", Tags.missingField, ["lastName"], cb) &&
       vld.chain(!isNaN(body.role) && (body.role >= 0 && body.role <= 1), 
       Tags.badValue, ["role"])
       .chain(body.email.length <= maxEmailLength, Tags.badValue, ["email"])
       .chain(!body.firstName ||body.firstName.length <= maxFirstNameLength, 
       Tags.badValue, ["firstName"])
       .chain(!body.lastName || body.lastName.length <= maxLastNameLength, 
       Tags.badValue, ["lastName"])
       .chain(!body.password || body.password.length <= maxPasswordLength, 
       Tags.badValue, ["password"])
       .chain(body.termsAccepted || admin, Tags.noTerms)
       .check((body.role < 0 || body.role > 1) || body.role === 0 || admin, 
       Tags.forbiddenRole, null, cb)) {
         cnn.chkQry('select * from Person where email = ?', body.email, cb);
      }
   }, 
   function(existingPrss, fields, cb) {
      if (vld.check(!existingPrss.length, Tags.dupEmail, null, cb)) {
         if (body.termsAccepted) {
            body.termsAccepted = body.whenRegistered;
         } else {
            body.termsAccepted = null;
         }
         cnn.chkQry('insert into Person set ?', body, cb);
      }
   }, 
   function(result, fields, cb) {
      res.location(router.baseURL + "/" + result.insertId).end();
      cb();
   }], 
   function(err) {
      cnn.release();
   });
});

router.put('/:id', function(req, res) {
   var vld = req.validator;
   var body = req.body;
   var admin = req.session.isAdmin();
   var cnn = req.cnn;
   
   async.waterfall([
   cb => {
      if (vld.checkPrsOk(Number(req.params.id), cb) && 
       vld.chain(!("termsAccepted" in body), Tags.forbiddenField, 
       ["termsAccepted"])
       .chain(!("whenRegistered" in body), Tags.forbiddenField, 
       ["whenRegistered"])
       .chain(!("email" in body), Tags.forbiddenField, ["email"])
       .chain(!("firstName" in body) || body.firstName === 0 || 
       body.firstName === "" || body.firstName === false || body.firstName && 
       isNaN(body.firstName) && body.firstName.length <= maxFirstNameLength, 
       Tags.badValue, ["firstName"])
       .chain(!("lastName" in body) || body.lastName === 0 || 
       body.lastName === "" || body.lastName === false || body.lastName && 
       isNaN(body.lastName) && body.lastName.length <= maxLastNameLength, 
       Tags.badValue, ["lastName"])
       .chain(!("password" in body) || body.password && isNaN(body.password) && 
       body.password.length <= maxPasswordLength, Tags.badValue, ["password"])
       .chain(!("password" in body) || !body.password || 
       ("oldPassword" in body) && body.oldPassword && 
       body.oldPassword !== null || admin, Tags.noOldPwd, null)
       .check(!("role" in body) || (admin && (!vld.isString(body.role) || 
       body.role === '') && (body.role >= 0 && body.role <= 1)) || 
       (!admin && ((vld.isString(body.role) && body.role === '') || 
       body.role === null || body.role === 0 || body.role === false)), 
       Tags.badValue, ["role"], cb)) {
         cnn.chkQry('select * from Person where id = ?', [req.params.id], cb);
      }
   }, 
   (prsArr, fields, cb) => { 
      if (vld.check(prsArr.length, Tags.notFound, null, cb) &&
       vld.check(!("password" in body) || (("oldPassword" in body) && 
       body.oldPassword === prsArr[0].password) || admin, Tags.oldPwdMismatch, 
       null, cb)) {
         delete body.oldPassword;
         if (body.role === null || body.role === '' || body.role === false) {
            body.role = 0;
         }
         if (Object.keys(body).length) {
            cnn.chkQry('update Person set ? where id = ?', 
            [body, req.params.id], cb);
         } else {
            cb(false, null, null);
         }
      }
   }, 
   (result, fields, cb) => {
      res.end();
      cb();
   }], 
   err => {
      cnn.release();
   });
});

router.get('/:id', function(req, res) {
   var vld = req.validator;
 
   async.waterfall([
   function(cb) {
      if (vld.checkPrsOk(Number(req.params.id), cb)) {
         req.cnn.chkQry('select * from Person where id = ?', [req.params.id], 
          cb);
      }
   }, 
   function(prsArr, fields, cb) {
      if (vld.check(prsArr.length, Tags.notFound, null, cb)) {
         delete prsArr[0].password;
         res.json(prsArr);
         cb();
      }
   }], 
   function(err) {
      req.cnn.release();
   });
});

router.delete('/:id', function(req, res) {
   var vld = req.validator;
   var id = Number(req.params.id);
   var cnn = req.cnn;
   var ssn = [];

   //Find sessions corresponding to the input user ID
   Session.getAllIds().forEach(ssnID => {
      if (Session.findById(ssnID).prsId === id) {
         ssn.push(Session.findById(ssnID));
      }
   });

   async.waterfall([
   function(cb) {
      if (vld.checkAdmin(cb)) {
         //search Likes for ones corresponding to this user
         req.cnn.chkQry('select * from Likes where prsId = ?', [id], cb);
      }
   },
   function(likeArr, fields, cb) {
      //if likes found, find corresponding message and decrease numLikes
      if (likeArr.length) {
         likeArr.forEach(like => {
            async.waterfall([
            function(callback) {
               req.cnn.chkQry('select * from Message where id = ?', 
                [like.msgId], callback);
            },
            function(msgArr, fields, callback) {
               msgArr[0].numLikes -= 1;
               cnn.chkQry('update Message set ? where id = ?', 
                [msgArr[0], msgArr[0].id], callback);
            }],
            function(err) {
               if (err) {
                  cb();
               }
            });
         });
      }

      //log out all sessions relating to user
      ssn.forEach(session => {
         session.logOut();
      });

      cnn.chkQry('DELETE from Person where id = ?', [id], cb);
   },
   function(result, fields, cb) {
      if (vld.check(result.affectedRows, Tags.notFound, null, cb)) {
         res.end();
         cb();
      }
   }],
   function(err) {
      cnn.release();
   });
});

module.exports = router;