var Converter = require('../src/converter');
var assert = require('chai').assert;

describe('Color pallete', function() {
    describe('When getting default pallete', function() {
        it('return 3 elements', function() {
            var converter = new Converter();

            var pallete = converter.getPallete();

            assert.isArray(pallete);
            assert.deepEqual(pallete, ["red", "green", "blue"]);
        });
    });
});
