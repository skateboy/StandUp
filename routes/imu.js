var express = require('express');
var router = express.Router();
var Imu = require('../models/imu');

router.post('/', function(req, res, next) {
    var imu = new Imu();
    imu.time = req.body.time;

    imu.save( function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'IMU data point added.' });
    });
});

router.get('/', function(req, res, next) {
    Imu.find( function(err, imus) {
        if (err)
            res.send(err);

        res.json(imus);
    })
});

module.exports = router;
