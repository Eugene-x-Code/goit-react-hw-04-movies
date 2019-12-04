import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmsList = ({ films }) => (
  <div>
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={{ pathname: `movies/${film.id}` }}>{film.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmsList;
