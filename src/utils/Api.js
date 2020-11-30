let headers = {
  "User-Agent": "airelogic-techtest/0.1.0 (anisa_patel@live.co.uk)",
};
let options = {
  method: "GET",
  headers: headers,
};

export const getArtistData = async (artist) => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/?query=artist:${artist}&fmt=json`,
      options
    );
    const data = await response.json();
    const artistData = {
      artistId: data.artists[0].id,
      artistName: data.artists[0].name,
    };
    return artistData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchReleasesByArtistId = async (artistId) => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/release/?artist=${artistId}&inc=recordings&limit=100&fmt=json`,
      options
    );
    const data = await response.json();
    const result = data.releases.map((release) => {
      return release.media[0].tracks;
    });
    return removeDuplicateTitles(result.flat());
  } catch (err) {
    console.log(err);
  }
};

export const fetchLyrics = async (artistName, title) => {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artistName}/${title}`
    );
    const data = await response.json();
    return data.lyrics;
  } catch (err) {
    console.log(err);
  }
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
