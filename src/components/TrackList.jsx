import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";
import Search from "./Search";

class TrackList extends Component {
  state = {
    trackList: [],
    artistData: {
      artistName: "The Beatles",
      artistId: "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
    },
  };

  componentDidMount() {
    this.fetchTracks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.artistData.artistId !== this.state.artistData.artistId) {
      this.fetchTracks();
    }
  }

  fetchTracks = () => {
    api
      .fetchReleasesByArtistId(this.state.artistData.artistId)
      .then((trackList) => {
        this.setState({ trackList });
      });
  };

  handleSearchArtist = (searchTerm) => {
    api.getArtistData(searchTerm).then((artistData) => {
      this.setState({ artistData });
    });
  };

  render() {
    return (
      <main className="main">
        <Search handleSearchArtist={this.handleSearchArtist} />
        <h2 className="main__title">
          All tracks for "{this.state.artistData.artistName}"
        </h2>
        <section className="trackcard">
          <ol className="main__list">
            {this.state.trackList.map((track) => {
              return (
                <li className="main__list__item">
                  <TrackCard
                    track={track}
                    key={track.id}
                    artistData={this.state.artistData}
                  />
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    );
  }
}

export default TrackList;
