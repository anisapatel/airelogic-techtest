// const MusicBrainzApi = require("musicbrainz-api").MusicBrainzApi;
// import axios from "axios";

// const mbApi = new MusicBrainzApi({
//   appName: "airelogic-techtest",
//   appVersion: "0.1.0",
//   appContactInfo: "anisa_patel@live.co.uk",
// });

const { filterTracks } = require("./index");

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
      //   const tracks = filterTracks(data.releases);
      return data.releases;
    });
  //   const artist = await mbApi.getArtist("859d0860-d480-4efd-970c-c05d5f1776b8", [
  //     "releases",
  //     "recordings",
  //   ]);
  //   console.log(artist.releases);
  //   return artist.releases;
};
