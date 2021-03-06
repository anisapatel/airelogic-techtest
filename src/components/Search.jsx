import React, { Component } from "react";
import * as api from "../utils/Api";
import PropTypes from "prop-types";

class Search extends Component {
  state = { input: "" };
  handleChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearchArtist(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <input
          type="text"
          aria-label="search-form__input"
          onChange={this.handleChange}
          value={this.state.input}
          placeholder="Search any artist"
          className="search-form__input"
        ></input>
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;

Search.propTypes = {
  handleSearchArtist: PropTypes.func,
};
