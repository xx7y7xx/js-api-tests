var assert = require("assert");

describe("split()", function() {
  it("split limit param", function() {
    assert.deepEqual("1,2".split(",", 0), []);
    assert.deepEqual("1,2".split(",", 1), ["1"]);
    assert.deepEqual("1,2".split(",", 2), ["1", "2"]);
    assert.deepEqual("1,2".split(",", 3), ["1", "2"]);
  });
});
