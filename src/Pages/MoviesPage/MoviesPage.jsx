import React, { Component } from 'react';
import { fetchSearchMovies } from '../../Utils/movie-api';
import Mapper from '../../Utils/Mapper';
import FilmsList from '../../Components/FilmsList/FilmsList';

class MoviesPage extends Component {
  state = { films: [], query: '' };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.getFilms();
    }
  }

  getFilms = () => {
    fetchSearchMovies(this.state.query).then(data =>
      this.setState({ films: Mapper(data.results) }),
    );
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ query: e.target.firstChild.value });
  };

  render() {
    const { films } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" autoComplete="off" placeholder="Search films..." />
          <button type="submit">Search</button>
        </form>
        {films.length > 0 && <FilmsList films={films} />}
      </div>
    );
  }
}

export default MoviesPage;
