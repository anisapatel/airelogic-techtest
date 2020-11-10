const MusicBrainzApi = require("musicbrainz-api").MusicBrainzApi;

const mbApi = new MusicBrainzApi({
  appName: "airelogic-techtest",
  appVersion: "0.1.0",
  appContactInfo: "anisa_patel@live.co.uk",
});

export const fetchReleasesByArtistId = async () => {
  const artist = await mbApi.getArtist("859d0860-d480-4efd-970c-c05d5f1776b8", [
    "releases",
  ]);
  console.log(artist.releases);
  return artist.releases;
};
