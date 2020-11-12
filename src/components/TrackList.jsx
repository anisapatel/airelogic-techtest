import React, { Component } from "react";
import * as api from "../utils/Api";
import TrackCard from "./TrackCard";
import Search from "./Search";

class TrackList extends Component {
  state = {
    trackList: [],
    searchTerm: "",
    artistData: {},
  };

  componentDidMount() {
    let beyonceId = "859d0860-d480-4efd-970c-c05d5f1776b8";
    this.fetchTracks(beyonceId);
  }

  fetchTracks = (artistId) => {
    api.fetchReleasesByArtistId(artistId).then((trackList) => {
      this.setState({ trackList });
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.artistData.artistId, "<--prevState");
  //   console.log(this.state.artistData.artistId, "<--new state");
  //   if (prevState.artistData.artistId !== this.state.artistData.artistId) {
  //     this.fetchTracks();
  //   }
  // }

  handleSearchArtist = (searchTerm) => {
    api.getArtistData(searchTerm).then((artistData) => {
      this.setState({ artistData });
      this.fetchTracks(artistData.artistId);
    });
  };

  render() {
    return (
      <div>
        <Search handleSearchArtist={this.handleSearchArtist} />
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
