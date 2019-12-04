import React from 'react';
import './style.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import HomePage from '../../Pages/HomePage/HomePage';
import MovieDetailsPage from '../../Pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies/:movie" component={MovieDetailsPage} />
        <Route exact path="/movies/" component={MoviesPage} />
        <Route
          exact
          path="/movies/:movie/cast"
          render={props => <MovieDetailsPage {...props} type="cast" />}
        />
        <Route
          exact
          path="/movies/:movie/reviews"
          render={props => <MovieDetailsPage {...props} type="reviews" />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
