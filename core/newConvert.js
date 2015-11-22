//var Converter = {
/*
    exports : {
        accel_y : 0.0,
        state : true,

        pushAccel : function(x,y,z) {
            ths.accel_y = y;
        },

        isTransition : function() {
            var cur = Math.abs(this.accel_y);
            var old_state = this.state;

            if (cur > 0.65) {
                this.state = true;
            }
            else
                this.state = false;

            var transition = (old_state == this.state) ? false : true;

            return transition;
        }
    }*/
//};
        exports.accel_y = 0.0,
        exports.state = true,

        exports.pushAccel = function(x,y,z) {
            this.accel_y = y;
        },

        exports.isTransition = function() {
            var cur = Math.abs(this.accel_y);
            var old_state = this.state;

            if (cur > 0.65) {
                this.state = true;
            }
            else
                this.state = false;

            var transition = (old_state == this.state) ? false : true;

            return transition;
        }

/*
exports.Converter.prototype.pushAccel = function (x,y,z) {
    this.accel_y = y;
};

exports.Converter.protoype.isTransition = function () {
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
*/
