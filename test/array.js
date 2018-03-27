var assert = require("assert");

describe("Array", function() {
  describe("#forEach()", function() {
    it("js object reference", function() {
      const oldArr = [{ foo: "bar" }, "bar"];
      const newArr = [];

      oldArr.forEach(item => {
        newArr.push(item);
      });

      oldArr[0].foo = "bar2";
      oldArr[1] = "bar3";

      assert.equal(newArr[0].foo, "bar2");
      assert.equal(newArr[1], "bar");
    });
  });

  describe("#map()", function() {
    it("js object reference", function() {
      const oldArr = [{ foo: "bar" }, "bar"];
      const newArr = oldArr.map(item => item);
      oldArr[0].foo = "bar2";
      oldArr[1] = "bar3";
      assert.equal(newArr[0].foo, "bar2");
      assert.equal(newArr[1], "bar");
    });
  });
});
