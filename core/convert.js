function Converter () {
    this.rot_x = new Array();
    this.rot_y = new Array();
    this.rot_z = new Array();

    this.accel_x = new Array();
    //this.accel_y = new Array();
    this.accel_y = 0.0;
    this.accel_z = new Array();

    this.state   = false;

    this.pushAccel = function (x, y, z) {
        //this.accel_x.push(x);
        /*
        if (this.accel_y.length > 10)
            this.accely_y.splice(0,1);
            */
        this.accel_y = y;
        //this.accel_y.push(y);
        //this.accel_z.push(z);
    };

    this.pushGyro = function (x, y, z) {
        /*
        this.rot_x.push(x);
        this.rot_y.push(y);
        this.rot_z.push(z);
        */
    };

    this.isTransition = function () {
        /*
        var avg = this.accel_y.reduce( function (a,b) {
            return +(b[1]) + a;
        }, 0) / this.accel_y.length;
        */

        /*
        var avg = 0.0;
        for (var i = 0; i < this.accel_y.length; i++)
            avg += this.accel_y[i];
        avg /= this.accel_y.length;

        console.log(this.accel_y[0]
                    + ' ' + this.accel_y[1]
                    + ' ' + this.accel_y[2]
                    + ' ' + this.accel_y[3]
                    + ' ' + this.accel_y[4]
                    + ' ' + this.accel_y[5]
                    + ' ' + this.accel_y[6]
                    + ' ' + this.accel_y[7]
                    + ' ' + this.accel_y[8]
                    + ' ' + this.accel_y[9]);

        console.log('Average y: ' + avg);
        if (avg > 0.65)
            this.state = !this.state;
            */
        console.log(Math.abs(this.accel_y));

        var cur = Math.abs(this.accel_y);
        var old_state = this.state;

        if (cur > 0.65) {
            this.state = true;
        }
        else
            this.state = false;

        var transition = (old_state == this.state) ? false : true;

        return transition;
    };
};

module.exports = Converter;
