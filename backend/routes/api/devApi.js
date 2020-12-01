const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router = express.Router();

//temp data storage
const screens = {};

//function to get the intial screen from a dev app
router.get('/getScreen', function (req, res) {
    axios.get('http://www.appname.com/getScreen')
    .then((response) => {
        return res.send(response.data)
    });
});

//function to send back data to a dev app
router.put('/returnInfo', function (req, res) {
    axios.put('http://www.appname/returnInfo', req.data)
    .then((response) => {
        return res.send(response.data)
    });
});

module.exports = router;