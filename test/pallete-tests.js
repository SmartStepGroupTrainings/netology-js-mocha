var Pallete = require("../src/pallete");
var assert = require("assert");

describe('Pallete should', function() {
  it('return default collection with 3 colors', function() {
    var pallete = new Pallete();

    var colors = pallete.getPallete();

    assert.deepEqual(colors, ["red", "green", "blue"]);
  });
});
