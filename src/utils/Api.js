import * as utils from "./index";

let headers = {
  "User-Agent": "airelogic-techtest/0.1.0 (anisa_patel@live.co.uk)",
};
let options = {
  method: "GET",
  headers: headers,
};

export const getArtistData = (artist) => {
  return fetch(
    `https://musicbrainz.org/ws/2/artist/?query=artist:${artist}&fmt=json`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const artist = {
        artistId: data.artists[0].id,
        artistName: data.artists[0].name,
      };
      return artist;
    });
};

export const fetchReleasesByArtistId = (artistId) => {
  return fetch(
    `https://musicbrainz.org/ws/2/release/?artist=${artistId}&inc=recordings&limit=100&fmt=json`,
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

export const fetchLyrics = (artistName, title) => {
  console.log(artistName, title, "<--going into function");
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${title}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.lyrics, "<--data");
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
