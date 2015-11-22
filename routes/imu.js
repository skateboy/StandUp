var express = require('express');
var router = express.Router();
var Imu = require('../models/imu');

router.post('/', function(req, res, next) {
    var imu = new Imu();
<<<<<<< HEAD
    imu.date = new Date();
=======
    imu.time = req.body.time;
>>>>>>> ca6dbe3295999a817eeac031e860e429abc7d205

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
