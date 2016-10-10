var Converter = function(pallete) {
    var self = this;
    self.pallete = pallete;

    self.getPallete = function() {
        return self.pallete.getPallete();
    };

    self.toRgb = function(hexColor) {
        if (hexColor.length < 6) {
            throw Error("Invalid hexColor length!");
        }

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

        return result ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        } : null;
    }
};

module.exports = Converter;
