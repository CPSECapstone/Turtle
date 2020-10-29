var Validator = function(req, res) {
   this.errors = [];
   this.session = req.session;
   this.res = res;
};

//list of errors and corresponding tags
Validator.Tags = {
   noLogin: 'noLogin', // No active session/login
   noPermission: 'noPermission', // Login lacks permission.
   missingField: 'missingField', // Field missing. Params[0] is field name
   badValue: 'badValue', // Bad field value.  Params[0] is field name
   notFound: 'notFound', // Entity not present in DB
   badLogin: 'badLogin', // Email/password combination invalid
   dupEmail: 'dupEmail', // Email duplicates an existing email
   noTerms: 'noTerms', // Acceptance of terms is required.
   forbiddenRole: 'forbiddenRole', // Cannot set to this role
   noOldPwd: 'noOldPwd', // Password change requires old password
   dupTitle: 'dupTitle', // Title duplicates an existing cnv title
   queryFailed: 'queryFailed',
   forbiddenField: 'forbiddenField',
   oldPwdMismatch: 'oldPwdMismatch'
};

//Checks test and responds to any errors found
Validator.prototype.check = function(test, tag, params, cb) {
   //check test adding errors with tag and params if found
   if (!test) {
      this.errors.push({ tag: tag, params: params });
   }

   //check for accumulated errors and respond with 400 if found.
   //'Anchor Test' as it returns all errors found, so all other tests
   //must run first (without reacting to accumulated errors).
   if (this.errors.length) {
      if (this.res) {
         if (this.errors[0].tag === Validator.Tags.noPermission) {
               this.res.status(403).end();
         } else {
               this.res.status(400).json(this.errors);
         }
         this.res = null;
      }
      if (cb) {
         cb(this);
      }
   }
   return !this.errors.length;
};

//Checks test and returns self for repeated chaining
Validator.prototype.chain = function(test, tag, params = null) {
   if (!test) {
      this.errors.push({ tag: tag, params: params });
   }
   return this;
};

//Checks if user is an admin, otherwise noPermission error
Validator.prototype.checkAdmin = function(cb) {
   return this.check(
      this.session && this.session.isAdmin(),
      Validator.Tags.noPermission,
      null, 
      cb
   );
};

//Checks if admin or owning person, otherwise noPermission error
Validator.prototype.checkPrsOk = function(prsId, cb) {
   return this.check(
      this.session && (this.session.isAdmin() || this.session.prsId === prsId),
      Validator.Tags.noPermission,
      null, 
      cb
   );
};

//Check for truthy fields of fieldlist in obj
Validator.prototype.hasFields = function(obj, fieldList, cb) {
   var self = this;

   fieldList.forEach(function(name) {
      self.chain(obj.hasOwnProperty(name), Validator.Tags.missingField, [name]);
   });

   //Chain handles errors, so to end just check with empty params
   return this.check(true, null, null, cb);
};

//Checks if obj only contains fieldsList params and nothing else
Validator.prototype.hasOnlyFields = function(obj, fieldList, cb) {
   for (var prop in obj.values()) {
      if (!fieldList.includes(prop)) {
         if (this.res) {
            this.res.status(500).end();
         }
         if (cb) {
            cb(this);
         }
      }
   }
};

Validator.prototype.isString = function(value) {
   return typeof value === 'string' || value instanceof String;
}

module.exports = Validator;