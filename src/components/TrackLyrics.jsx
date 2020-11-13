import * as api from "../utils/Api";
import Loader from "./Loader";
import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

class TrackLyrics extends Component {
  state = { lyrics: "", isLoading: true };

  componentDidMount() {
    api.fetchLyrics(this.props.artist, this.props.title).then((lyrics) => {
      this.setState({ lyrics, isLoading: false });
    });
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    if (!this.state.lyrics) return <ErrorPage />;
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
