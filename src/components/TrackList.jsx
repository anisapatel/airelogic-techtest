import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";
import Search from "./Search";

class TrackList extends Component {
  state = {
    trackList: [],
    searchTerm: "",
    artistData: {},
  };

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks = () => {
    api
      .fetchReleasesByArtistId(this.state.artistData.artistId)
      .then((trackList) => {
        this.setState({ trackList });
      });
  };

  updateSearchTerm = (searchTerm) => {
    api.getArtistData(searchTerm).then(({ artistData }) => {
      this.setState({ artistData });
    });
  };

  render() {
    return (
      <div>
        <Search />
        {this.state.trackList.map((track) => {
          if (track.length > 0) {
            return <TrackCard track={track} key={track.id} />;
          }
        })}
      </div>
    );
  }
}

export default TrackList;
