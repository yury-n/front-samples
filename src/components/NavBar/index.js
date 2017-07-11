import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';

class NavBar extends React.Component {
  render () {
    const pages = ['modals', 'students', 'classrooms'];

    return (
      <div role="nav" className={styles['nav-bar']}>
        {pages.map(this._renderLink)}
      </div>
    )
  }

  _renderLink (page, i = -1) {
    return (
      <NavLink
        key={i}
        className={styles['link']}
        activeClassName={styles['active-link']}
        to={`/${page}`}>
          {page}
      </NavLink>
    );
  }
}

export default withRouter(NavBar);
