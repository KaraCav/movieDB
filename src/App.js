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
  }
  componentWillMount() {
    axios.get('http://localhost:3001/api/popular/movies').then(response => {
      this.setState({ moviesList: response.data.results });
      console.log(response.data.results);
    });
  }
  render() {
    const imgURL = 'http://image.tmdb.org/t/p/original';
    const movies = this.state.moviesList.map((movie, index) => {
      return (
        <div key={index} className="movie-card">
          <img
            className="movie-card-pic"
            style={({ height: '100%' }, { width: '100%' })}
            src={`${imgURL}${movie.poster_path}`}
          />
          <p>{movie.title}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>My Movie App</h1>
        <div className="movies-container-main">{movies}</div>
      </div>
    );
  }
}

export default App;
