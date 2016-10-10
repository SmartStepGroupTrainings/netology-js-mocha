var supertest = require("supertest");
var assert = require("chai").assert;
var server = supertest.agent("http://localhost:3000");

describe.only("When open home page", function() {
      it("should return hello message", function(done) {
        server
            .get("/")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.isFalse(res.body.error);
                done();
            });
    });

});
