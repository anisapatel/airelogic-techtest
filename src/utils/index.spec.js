const { expect } = require("chai");
const { filterTracks } = require("./index");

describe("filterTracks", () => {
  it("when passed an array of releases, returns a tracklist", () => {
    expect(filterTracks());
  });
});
