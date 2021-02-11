var crypto = require('crypto');

var ssnsByCookie = {}; //All currently logged in sessions by token
var ssnsById = []; //All currently logged in sessions by session ID
var duration = 7200000; //Two hours in ms
var cookieName = 'CHSAuth'; //Cookie key for auth tokens

var Session = function(user, res) {
   //Creates random token
   var authToken = crypto.randomBytes(16).toString('hex'); 

   res.cookie(cookieName, authToken, { maxAge: duration, httpOnly: true });
   ssnsByCookie[authToken] = this;
   ssnsById.push(this);

   this.id = ssnsById.length - 1;
   this.authToken = authToken;
   this.firstName = user.firstName;
   this.lastName = user.lastName;
   this.prsId = user.id;
   this.email = user.email;
   this.role = user.role;
   this.loginTime = this.lastUsed = new Date().getTime();
};

Session.prototype.isAdmin = function() {
   return this.role === 1;
};

//Log out a user by removing session
Session.prototype.logOut = function() {
   delete ssnsById[this.id];
   delete ssnsByCookie[this.authToken];
};

//Clear out all old sessions
Session.nuke = function() {
   ssnsByCookie = {};
   ssnsById = [];
}

Session.getAllIds = () => Object.keys(ssnsById);
Session.findById = id => ssnsById[id];

var router = function (req, res, next) {
   var cookie = req.cookies[cookieName];
   var session = cookie && ssnsByCookie[cookie];

   if (session) {
      //if session used over duration time ago (2 hours)
      if (session.lastUsed < new Date().getTime() - duration) {
         session.logOut();
      } else {
         req.session = session;
      }
   }
   next();
};

module.exports = { Session, router };
