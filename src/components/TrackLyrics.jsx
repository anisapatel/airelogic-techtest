import * as api from "../utils/Api";

import React, { Component } from "react";

class TrackLyrics extends Component {
  state = { lyrics: "" };

  componentDidMount() {
    api
      .fetchLyrics(this.props.state.artist, this.props.title)
      .then((lyrics) => {
        this.setState({ lyrics });
      });
  }
  render() {
    return (
      <div className="lyricsText">
        <h2>{this.props.title}</h2>
        <p>{this.state.lyrics}</p>
      </div>
    );
  }
}

export default TrackLyrics;
