import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a GIF search term:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
