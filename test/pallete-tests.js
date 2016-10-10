var Pallete = require("../src/pallete");
var assert = require("assert");

describe('Pallete should', function() {
    it('return default collection with 3 colors', function() {
        var pallete = new Pallete();

        var colors = pallete.getPallete();

        assert.deepEqual(colors, ["red", "green", "blue"]);
    });

    it('async return default collection with 3 colors', function(done) {
        var pallete = new Pallete();

        var colors = pallete.getPalleteAsync(function(colors) {
            assert.deepEqual(colors, ["red", "green", "blue"]);
            done();
        });
    });

    it('async promise return default collection with 3 colors', function() {
        var pallete = new Pallete();

        return pallete.getPalleteAsyncPromise().then(function(result) {
            assert.deepEqual(result, ["red", "green", "blue"]);
        });
    });
});
