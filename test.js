const assert = require("assert");
const utils = require("./index");

describe("#decodeQueryString", () => {
  it("a=1&b=2 should return {a:1,b:2}", () => {
    assert.deepStrictEqual(utils.decodeQueryString("a=1&b=2"), {
      a: "1",
      b: "2"
    });
  });
});

describe("#encodeQueryString", () => {
  it("{a: '1', b: '2'} should return a=1&b=2", () => {
    assert.deepStrictEqual(utils.encodeQueryString({a:'1', b: '2'}), 'a=1&b=2');
  });

  it("{a: 1, b: 2} should return a=1&b=2", () => {
    assert.deepStrictEqual(utils.encodeQueryString({a:1, b: 2}), 'a=1&b=2');
  });
});
