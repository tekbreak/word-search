const { getRandomLetter } = require("../src/utils.js");

describe("utils.getRandomLetter", () => {
  it(`returns an uppercase letter`, () => {
    const res = getRandomLetter("ab", true);
    expect(res).toEqual(res.toUpperCase());
  });
  it(`returns an lowercase letter`, () => {
    const res = getRandomLetter("ab", false);
    expect(res).toEqual(res.toLowerCase());
  });
});
