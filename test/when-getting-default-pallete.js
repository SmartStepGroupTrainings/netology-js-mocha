var Converter = require('../src/converter');
var Pallete = require('../src/pallete');
var assert = require('chai').assert;

describe('When getting default pallete', function() {
    var defaultPallette = {};

    beforeEach(function() {
        defaultPallette = new Pallete();
    });

    it('return 3 colors', function() {
        var converter = new Converter(defaultPallette);

        var pallete = converter.getPallete();

        assert.equal(pallete[0], "red");
        assert.equal(pallete[1], "green");
        assert.equal(pallete[2], "blue");
    });
});
