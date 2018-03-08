import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesList: []
    };
    this.overviewDisplay = this.overviewDisplay.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/popular/movies').then(response => {
      this.setState({ moviesList: response.data.results });
    });
  }
  overviewDisplay(index) {
    const thisOverview = this.state.moviesList[index].overview;
    console.log(thisOverview);
    // this.style.display = 'block';

    return `<div>${this.state.moviesList[index].overview}</div>`;
  }
  render() {
    const imgURL = 'http://image.tmdb.org/t/p/original';
    const movies = this.state.moviesList.map((movie, index) => {
      return (
        <div
          key={index}
          className="movie-card"
          onMouseOver={() => this.overviewDisplay(index)}
        >
          <img
            className="movie-card-pic"
            style={({ height: '100%' }, { width: '100%' })}
            src={`${imgURL}${movie.poster_path}`}
          />
          <div className="overview" style={{ display: 'none' }}>
            {movie.overview}
          </div>

          <p style={{ border: 'none' }}>{movie.title}</p>
        </div>
      );
    });
    return (
      <div className="main-div">
        <h1>Now Playing</h1>
        <div className="movies-container-main">{movies}</div>
      </div>
    );
  }
}

export default App;
