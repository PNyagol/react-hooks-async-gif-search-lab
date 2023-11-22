import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    const apiKey = 'lG1SbE4C5aYo3SHK5RCjELfL07aRuks0';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0, 3)
        });
      });
  }

  handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
