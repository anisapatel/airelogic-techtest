import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";
import Search from "./Search";

class TrackList extends Component {
  state = {
    trackList: [],
    artistData: {
      artistName: "Beyonce",
      artistId: "859d0860-d480-4efd-970c-c05d5f1776b8",
      description: "US singer, songwriter, record producer & actress",
    },
  };

  componentDidMount() {
    this.fetchTracks();
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
      this.setState({ artistData }, () => {
        this.fetchTracks();
      });
    });
  };

  render() {
    return (
      <main>
        <Search handleSearchArtist={this.handleSearchArtist} />
        {this.state.trackList.map((track) => {
          if (track.length > 0) {
            return (
              <TrackCard
                track={track}
                key={track.id}
                artistData={this.state.artistData}
              />
            );
          }
        })}
      </main>
    );
  }
}

export default TrackList;
