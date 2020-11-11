import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";

class TrackList extends Component {
  state = {
    trackList: [],
  };

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks = () => {
    api.fetchReleasesByArtistId().then((trackList) => {
      this.setState({ trackList });
    });
  };
  render() {
    return (
      <div>
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
