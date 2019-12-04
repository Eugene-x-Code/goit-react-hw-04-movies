import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovie } from '../../Utils/movie-api';
import Cast from '../../Components/Cast/Cast';
import Reviews from '../../Components/Reviews/Reviews';
import MovieDetail from '../../Components/Movie/MovieDetail';

const getIdFromProps = props => props.match.params.movie;

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  static propTypes = {
    type: PropTypes.string,
  };

  componentDidMount() {
    const match = getIdFromProps(this.props);
    fetchMovie(match).then(movie => this.setState({ movie }));
  }

  render() {
    const { type } = this.props;
    const { movie } = this.state;
    return (
      <div>
        {movie ? (
          <div>
            <Link to="/">
              <button type="button">Go Back</button>
            </Link>
            <MovieDetail {...movie} />
            <hr />
            <div>Additional information</div>
            <ul>
              <li>
                <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <hr />
            {type === 'cast' && <Cast movieId={movie.id} />}
            {type === 'reviews' && <Reviews movieId={movie.id} />}
          </div>
        ) : (
          <p>Nothing Found</p>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
