import React, { Component } from "react";

class Search extends Component {
  state = { searchTerm: "" };
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearchTerm(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };
  render() {
    return (
      <form handleSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.searchTerm}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
