import React, { Component } from "react";
import * as api from "../Api";

class TrackList extends Component {
  state = {
    tracks: [],
  };

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks = () => {
    api.fetchReleasesByArtistId().then((tracks) => {
      this.setState({ tracks });
    });
  };
  render() {
    return <div></div>;
  }
}

export default TrackList;
