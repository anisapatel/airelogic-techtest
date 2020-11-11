import * as api from "../utils/Api";

import React, { Component } from "react";

class TrackCard extends Component {
  state = { lyrics: "" };

  componentDidMount() {
    api.fetchLyrics(this.props.title).then((lyrics) => {
      console.log(lyrics, "<--");
      this.setState({ lyrics });
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.lyrics}</p>
      </div>
    );
  }
}

export default TrackCard;
