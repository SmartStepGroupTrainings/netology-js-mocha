var Pallete = function() {
    var self = this;

    self.getPallete = function() {
        return ["red", "green", "blue"];
    };


    self.getPalleteAsync = function(callback) {
        setTimeout(function() {
            callback (["red", "green", "blue"]);
        }, 100);
    };
};

module.exports = Pallete;
