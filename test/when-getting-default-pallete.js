
var Converter = require('../src/converter');
var assert = require('chai').assert;

describe('When getting default pallete', function() {
  it('return 3 colors', function() {
    var converter = new Converter();

    var pallete = converter.getPallete();

    assert.equal(pallete[0], "red");
    assert.equal(pallete[1], "green");
    assert.equal(pallete[2], "blue");
  });
});
