import * as utils from "./index";

let headers = {
  "User-Agent": "airelogic-techtest/0.1.0 (anisa_patel@live.co.uk)",
};
let options = {
  method: "GET",
  headers: headers,
};

export const fetchReleasesByArtistId = () => {
  return fetch(
    `https://musicbrainz.org/ws/2/release/?artist=859d0860-d480-4efd-970c-c05d5f1776b8&inc=recordings&limit=100&fmt=json`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.releases.map((release) => {
        return release.media[0].tracks;
      });
      return removeDuplicateTitles(result.flat());
    });
};

export const fetchLyrics = (title) => {
  return fetch(`https://api.lyrics.ovh/v1/beyonce/${title}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data.lyrics), "<--data");
      return data.lyrics;
    });
};

const removeDuplicateTitles = (tracksArr) => {
  let filteredTrackList = [];
  let lookupObj = {};
  tracksArr.forEach((trackObj) => {
    if (!lookupObj[trackObj.title]) {
      lookupObj[trackObj.title] = true;
      filteredTrackList.push(trackObj);
    }
  });
  return filteredTrackList;
};
