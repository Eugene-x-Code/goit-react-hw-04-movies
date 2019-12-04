import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchCredits } from '../../Utils/movie-api';

class Cast extends Component {
  state = {
    credits: null,
  };

  static propTypes = {
    movieId: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { movieId } = this.props;
    fetchCredits(movieId).then(res => this.setState({ credits: res.cast }));
  }

  render() {
    const { credits } = this.state;

    return (
      <div>
        {credits && (
          <div>
            {credits.map(p => (
              <div key={p.id}>
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w185${p.profile_path}`}
                    alt=""
                  />
                </div>
                <div>{p.name}</div>
                <div>Character: {p.character}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Cast;
