var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var { Session, router } = require('./Routes/Session.js');
var Validator = require('./Routes/Validator.js');
var CnnPool = require('./Routes/CnnPool.js');
var async = require('async');

var app = express();

var port;

//Static paths (index.html) & client side js
app.use(express.static(path.join(__dirname, 'public')));

if (process.argv[2] === '-p') {
   port = process.argv[3];
}

app.use(function(req, res, next) {
   console.log('Handling ' + req.path + '/' + req.method);
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Expose-Headers', 'Location');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   next();
});

app.options('/*', function(req, res) {
   res.status(200).end();
});

//Parse all request bodies with JSON
app.use(bodyParser.json());

//No messing with DB ID's
app.use(function(req, res, next) {
   delete req.body.id;
   next();
});

//Attach cookies to req as req.cookies.<name>
app.use(cookieParser());

//set up a Session on req
app.use(router);

//Check general login, if ok add Validator to req
app.use(function(req, res, next) {
   console.log(req.path);
   if (req.session || (req.method === 'POST' && 
    (req.path === '/Prss' || req.path === '/Ssns'))) {
      req.validator = new Validator(req, res);
      next();
   } else {
      res.status(401).end();
   }
});

//Add DB connection to req
app.use(CnnPool.router);

//Load all subroutes
app.use('/Prss', require('./Routes/Account/Prss.js'));
app.use('/Ssns', require('./Routes/Account/Ssns.js'));

//Route for /DB Delete
//Clears all DB content, and reinserts 1 admin user
app.delete('/DB', function(req, res) {
   if (req.session.isAdmin()) {
      //Callback to clear tables
      var cbs = ['Person'].map(
         table =>
            function(cb) {
               req.cnn.query('delete from ' + table, cb);
            }
      );

      //Callback to reset increment base
      cbs = cbs.concat(
         ['Person'].map(table => cb => {
            req.cnn.query('alter table ' + table + ' auto_increment = 1', cb);
         })
      );

      // Callback to reinsert admin user
      cbs.push(cb => {
         req.cnn.query('INSERT INTO Person (firstName, lastName, email,' +
          ' password, whenRegistered, role) VALUES ' +
          '("Joe", "Admin", "joe@test.com","password", UNIX_TIMESTAMP(), 1);', 
          cb);
      });

      //Callback to clear sessions and release connections
      cbs.push(callback => {
         Session.getAllIds().forEach(id => {
            Session.findById(id).logOut();
         });
         Session.nuke();
         callback();
      });

      //Calls all callbacks and returns err if any occured
      async.series(cbs, err => {
         req.cnn.release();
         if (err) {
            res.status(400).json(err);
         } else {
            res.status(200).end();
         }
      });
   } else {
      req.cnn.release();
      res.status(403).end();
   }
});

//Anchor function for general 404
app.use(function(req, res) {
   res.status(404).end();
   req.cnn.release();
});

//Last resort, return 500 with stack trace (exception handler)
app.use(function(err, req, res, next) {
   res.status(500).json(err.stack);
   req.cnn && req.cnn.release();
});

app.listen(port, function() {
   console.log('App listening on port ' + port);
});
