var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var IMUSchema = new Schema ({
    // Timestamp
<<<<<<< HEAD
    date  : Date,
=======
    time  : Date,
>>>>>>> ca6dbe3295999a817eeac031e860e429abc7d205
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
