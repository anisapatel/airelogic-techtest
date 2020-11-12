import React, { Component } from "react";

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
