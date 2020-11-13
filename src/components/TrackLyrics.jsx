import * as api from "../utils/Api";

import React, { Component } from "react";

class TrackLyrics extends Component {
  state = { lyrics: "" };

  componentDidMount() {
    api.fetchLyrics(this.props.artist, this.props.title).then((lyrics) => {
      this.setState({ lyrics });
    });
  }
  render() {
    return (
      <section className="lyrics">
        <h2 className="lyrics__title">
          "{this.props.title}" by {this.props.artist}
        </h2>
        <p className="lyrics__text">{this.state.lyrics}</p>
      </section>
    );
  }
}

export default TrackLyrics;
