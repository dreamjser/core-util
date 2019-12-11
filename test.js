const expect = require("chai").expect;
const utils = require("./index");

describe("#decodeQueryString", () => {
  it("empty param should throw error 'param must be input'", () => {
    expect(() => utils.decodeQueryString()).to.throw('param must be input');
  });

  it("not string param should throw error 'param must be string'", () => {
    expect(() => utils.decodeQueryString(22)).to.throw('param must be string');
  });

  it("a=1&b=2 should return {a:1,b:2}", () => {
    expect(utils.decodeQueryString("a=1&b=2")).to.deep.equal({
      a: "1",
      b: "2"
    });
  });
});

describe("#encodeQueryString", () => {
  it("empty param should throw error 'param must be input'", () => {
    expect(() => utils.encodeQueryString()).to.throw('param must be input');
  });

  it("{a: '1', b: '2'} should return a=1&b=2", () => {
    expect(utils.encodeQueryString({a:'1', b: '2'})).to.equal('a=1&b=2');
  });

  it("{a: 1, b: 2} should return a=1&b=2", () => {
    expect(utils.encodeQueryString({a:1, b: 2})).to.equal('a=1&b=2');
  });
});
