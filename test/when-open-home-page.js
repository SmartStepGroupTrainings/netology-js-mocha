var supertest = require("supertest");
var assert = require("chai").assert;
var server = supertest.agent("http://localhost:3000");

describe("When open home page", function() {
    it("should return code 200 and hello message", function(done) {
        server
            .get("/")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(error, response) {
                assert.equal(response.status, 200);
                assert.isFalse(response.body.error);
                assert.equal(response.body.message, "Hello my friend!");
                done();
            });
    });

    it('should return code 404 if accessing random url', function(done) {
        server
            .get("/random")
            .expect(404)
            .end(function(error, response) {
                assert.equal(response.status, 404);
                done();
            });
    });
});
