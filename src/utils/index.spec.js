const { expect } = require("chai");
const { removeDuplicateTitles } = require("./index");

describe("removeDuplicateTitles", () => {
  it("when passed an array of releases, returns a tracklist", () => {
    expect(removeDuplicateTitles());
  });
});
