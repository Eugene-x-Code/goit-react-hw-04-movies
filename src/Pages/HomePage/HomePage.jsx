import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchTrendingMovies } from '../../Utils/movie-api';
import FilmsList from '../../Components/FilmsList/FilmsList';
import Mapper from '../../Utils/Mapper';

class HomePage extends Component {
  state = { films: [] };

  componentDidMount() {
    fetchTrendingMovies().then(data =>
      this.setState({ films: Mapper(data.results) }),
    );
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        <FilmsList films={films} />
      </div>
    );
  }
}

export default withRouter(HomePage);
