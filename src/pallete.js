var Pallete = function() {
    var self = this;

    self.getPallete = function() {
        return ["red", "green", "blue"];
    };

    self.getPalleteAsync = function(callback) {
        setTimeout(function() {
            callback(["red", "green", "blue"]);
        }, 100);
    };

    self.getPalleteAsyncPromise = function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(["red", "green", "blue"]);
            }, 100);
        });
    };
};

module.exports = Pallete;
