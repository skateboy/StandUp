function Converter () {
    this.rot_x = new Array();
    this.rot_y = new Array();
    this.rot_z = new Array();

    this.accel_x = new Array();
    this.accel_y = new Array();
    this.accel_z = new Array();

    this.pushAccel = function (x, y, z) {
        this.accel_x.push(x);
        if (this.accel_y.length > 10)
            this.accely_y.splice(0,1);
        this.accel_y.push(y);
        this.accel_z.push(z);
    };

    this.pushGyro = function (x, y, z) {
        this.rot_x.push(x);
        this.rot_y.push(y);
        this.rot_z.push(z);
    };

    this.transition = function () {
        var avg = this.accel_y.reduce( function (a,b) {
            return +(b[1]) + a;
        }, 0) / accel_y.length;
    };
};

module.exports = Converter;
