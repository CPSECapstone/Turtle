var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
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

//Anchor function for general 404
app.use(function(req, res) {
   res.status(404).end();
});

//Last resort, return 500 with stack trace (exception handler)
app.use(function(err, req, res, next) {
   res.status(500).json(err.stack);
});

app.listen(port, function() {
   console.log('App listening on port ' + port);
});
