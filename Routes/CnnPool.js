var mysql = require('mysql');

//DB connection pool constructor
var CnnPool = function() {
   var poolCfg = require('./connection.json');

   poolCfg.connectionLimit = CnnPool.PoolSize;
   this.pool = mysql.createPool(poolCfg);
};

CnnPool.PoolSize = 1;

CnnPool.singleton = new CnnPool();

//might not be best idea for multiple logins
CnnPool.res;

//Draws connection from pool
CnnPool.prototype.getConnection = function(cb) {
   this.pool.getConnection(cb);
};

//Used in auto-creating CnnPool for a request
CnnPool.router = function(req, res, next) {
   CnnPool.res = res;
   console.log('Getting connection...');

   CnnPool.singleton.getConnection(function(err, cnn) {
      if (err) {
         res.status(500).json('Failed to get connection ' + err);
      } else {
         console.log('Connection acquired');

         cnn.chkQry = function(qry, prms, cb) {
            //Runs real query
            this.query(qry, prms, 
            function(err, res, fields) {
               if (err) {
                  CnnPool.res.status(500).json('Failed query ' + qry);
               }
               cb(err, res, fields);
            });
         };
         req.cnn = cnn;
         next();
      }
   });
};

module.exports = CnnPool;
