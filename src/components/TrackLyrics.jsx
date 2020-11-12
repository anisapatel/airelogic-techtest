import * as api from "../utils/Api";

import React, { Component } from "react";

class TrackCard extends Component {
  state = { lyrics: "" };

  componentDidMount() {
    api.fetchLyrics(this.props.title).then((lyrics) => {
      this.setState({ lyrics });
    });
  }
  render() {
    return (
      <div className="lyricsText">
        <p
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {this.state.lyrics}
        </p>
        {/* {this.state.lyrics.split(/[\n|\r]+/).map((lyric, index) => {
          return (
            <span key={index}>
              {lyric}
              <br />
            </span>
          );
        })} */}
      </div>
    );
  }
}

export default TrackCard;
