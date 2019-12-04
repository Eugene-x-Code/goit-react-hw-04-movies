import axios from 'axios';
import RenameKeys from './RenameKeys';

const API_KEY = '56d683041d5d1a0178e72b4a2ffc8e86';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  const url = `trending/all/day?api_key=${API_KEY}`;

  return axios.get(url).then(res => res.data);
};

export const fetchSearchMovies = movie => {
  const url = `search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`;

  return axios.get(url).then(res => res.data);
};

export const fetchMovie = id => {
  const url = `movie/${id}?api_key=${API_KEY}`;

  return axios.get(url).then(res =>
    RenameKeys(
      {
        vote_average: 'voteAverage',
        poster_path: 'posterPath',
        release_date: 'releaseDate',
      },
      res.data,
    ),
  );
};

export const fetchReviews = id => {
  const url = `movie/${id}/reviews?api_key=${API_KEY}`;

  return axios.get(url).then(res => res.data);
};

export const fetchCredits = id => {
  const url = `movie/${id}/credits?api_key=${API_KEY}`;

  return axios.get(url).then(res => res.data);
};
