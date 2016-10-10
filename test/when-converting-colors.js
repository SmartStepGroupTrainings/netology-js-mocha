var Converter = require('../src/converter');
var Pallete = require('../src/pallete');
var assert = require('chai').assert;

describe('When converting colors from hex to RGB', function() {
    var defaultPallette = {};

    beforeEach(function() {
        defaultPallette = new Pallete();
    });

    it('throw errror if hexColor length is less than 6 symbols', function() {
        var converter = new Converter(defaultPallette);

        var action = () => {
            converter.toRgb("12345")
        };

        assert.throws(action, "Invalid hexColor length!");
    });

    it('return white color if the hex value is white (#000000)', function() {
        var converter = new Converter(defaultPallette);

        var whiteColor = converter.toRgb('#000000');

        assert.deepEqual(whiteColor, {
            red: 0,
            green: 0,
            blue: 0
        });
    });

    it('return black color if the hex value is black (#FFFFFF)', function() {
        var converter = new Converter(defaultPallette);

        var whiteColor = converter.toRgb('#FFFFFF');

        assert.deepEqual(whiteColor, {
            red: 255,
            green: 255,
            blue: 255
        });
    });

    it('return null if invalid color is passed', function() {
        var converter = new Converter(defaultPallette);

        var color = converter.toRgb('Not a valid color');

        assert.isNull(color);
    });
});
