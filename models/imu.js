var mongoose = require('mongoose'),
    FormatDate = mongoose.Schema.Types.FormatDate = require('../libs/formatdate');
var Schema   = mongoose.Schema;

var IMUSchema = new Schema ({
    // Timestamp
    //time  : {type: FormatDate, format: "YYYY-MM-DD'T'HH:mm", default: Date.now},
    date  : { type: Number, default: function(){return new Date().getTime()} },
    // Gyroscope
    rot_x : Number,
    rot_y : Number,
    rot_z : Number,
    // Accelerometer
    acc_x : Number,
    acc_y : Number,
    acc_z : Number
});


module.exports = mongoose.model('IMU', IMUSchema);
