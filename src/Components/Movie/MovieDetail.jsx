import React from 'react';
import PropTypes from 'prop-types';

const MovieDetail = ({
  title,
  overview,
  posterPath,
  voteAverage,
  genres,
  releaseDate,
}) => (
  <div>
    <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="#" />
    <h1>
      {title} ({releaseDate.slice(0, 4)})
    </h1>
    <p>User score: {Math.round(voteAverage * 10)}%</p>
    <hr />
    <h3>Overview</h3>
    <p>{overview}</p>
    <hr />
    <h3>Genres</h3>
    <p>{genres.reduce((acc, genre) => `${acc + genre.name} `, '')}</p>
  </div>
);

MovieDetail.defaultProps = {
  overview: 'Not Found',
  voteAverage: 0,
};

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieDetail;
