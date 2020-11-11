import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";

class TrackList extends Component {
  state = {
    releases: [],
  };

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks = () => {
    api.fetchReleasesByArtistId().then((releases) => {
      this.setState({ releases });
    });
  };
  render() {
    return (
      <div>
        {this.state.releases.map((release) => {
          return release.media[0].tracks.map((track) => {
            return <TrackCard track={track.title} key={track.id} />;
          });
        })}
      </div>
    );
  }
}

export default TrackList;
