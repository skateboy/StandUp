var express = require('express');
var router = express.Router();
var Gyro = require('../models/imu');

router.post('/', function(req, res, next) {
    var gyro = new Gyro();
    gyro.time = req.body.time;

    gyro.save( function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'IMU data point added.' });
    });
});

router.get('/', function(req, res, next) {
    Gyro.find( function(err, gyros) {
        if (err)
            res.send(err);

        res.json(gyros);
    })
});

module.exports = router;
