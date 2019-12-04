import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchReviews } from '../../Utils/movie-api';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { movieId } = this.props;
    fetchReviews(movieId).then(res => this.setState({ reviews: res.results }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews && reviews.length ? (
          <ul>
            {reviews.map(r => (
              <li key={r.id}>
                <strong>{r.author}</strong>
                <p>{r.content}</p>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          'We dont have any reviews for this movie'
        )}
      </div>
    );
  }
}

export default Reviews;
