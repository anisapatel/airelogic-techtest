import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";

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
    return (
      <div>
        {this.state.tracks.map((track) => {
          return <TrackCard track={track} />;
        })}
      </div>
    );
  }
}

export default TrackList;
