import React, { Component } from "react";
import * as api from "../utils/Api";

class Search extends Component {
  state = { input: "" };
  handleChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearchArtist(this.state.input);
    this.setState({ input: "" });
  };

  handleSearchArtist = (searchTerm) => {
    api.getArtistData(searchTerm).then((artistData) => {
      this.props.fetchTracks(artistData);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
