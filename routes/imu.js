var express = require('express');
var router = express.Router();
var Imu = require('../models/imu');
var Convert = require('../core/newConvert');
//var Converter = new Convert();

router.post('/', function(req, res, next) {
    var imu = new Imu();
    imu.date = new Date();
    imu.acc_x = req.body.accX;
    imu.acc_y = req.body.accY;
    imu.acc_z = req.body.accZ;

    imu.gyro_x = req.body.rotX;
    imu.gyro_y = req.body.rotY;
    imu.gyro_z = req.body.rotZ;

    Convert.pushAccel(imu.acc_x, imu.acc_y, imu.acc_z);
    //Converter.pushGyro(imu.gyro_x, imu.gyro_y, imu.gyro_z);

    if (Convert.isTransition()) {
        console.log('Adding transition to database...');
        imu.save( function(err) {
            if (err)
                res.send(err);
        });
    }

    res.json({ message: Convert.state });
});

router.get('/', function(req, res, next) {
    Imu.find( function(err, imus) {
        if (err)
            res.send(err);

        res.json(imus);
    })
});

router.get('/today', function(req, res, next) {
    var cur_day = new Date().toISOString().substring(0,10).split('-')[2];

    yesterday = new Date();
    yesterday.setDay(yesterday.getDay()-1);

    Imu.find({}).where('date').gte(yesterday).exec( function (err, imus) {
        if (err)
            res.send(err);

        console.log(imus);
        res.json(imus);
    });
});

router.get('/month', function(req, res, next) {
    var cur_day = new Date().toISOString().substring(0,10).split('-')[2];

    yesterday = new Date();
    yesterday.setMonth(yesterday.getMonth()-1);

    Imu.find({}).where('date').gte(yesterday).exec( function (err, imus) {
        if (err)
            res.send(err);

        console.log(imus);
        res.json(imus);
    });
});

Date.prototype.setDay = function(dayOfWeek) {
        this.setDate(this.getDate() - this.getDay() + dayOfWeek);
};

module.exports = router;
