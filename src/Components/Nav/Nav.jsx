import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import scss from './Nav.module.scss';

const Nav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/" activeClassName={scss.navActive} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Movies" activeClassName={scss.navActive}>
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default withRouter(Nav);
