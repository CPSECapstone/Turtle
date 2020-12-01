const express = require('express');
const router = express.Router();

//function to get the intial screen from a dev app
router.get('/getScreen', function (req, res) {
    console.log(req.body);
    res.send("getScreen");
});

//function to send back data to a dev app
router.put('/returnInfo', function (req, res) {
    console.log(req.body);
    res.send("returnInfo");
});
