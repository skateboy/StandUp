var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var IMUSchema = new Schema ({
    time: Date,
    x   : String,
    y   : String,
    z   : String
});

module.exports = mongoose.model('IMU', IMUSchema);
