var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var IMUSchema = new Schema ({
    // Timestamp
    date  : Date,
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
