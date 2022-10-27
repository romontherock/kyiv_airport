import React from 'react';
import '../../styles/navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        className="navigation__btn navigation-departure__btn"
        to={`/departure${location.search}`}
        activeClassName="navigation__btn_selected"
      >
        <span className="navigation__btn-icon">
          <i className="fas fa-plane-departure"></i>
        </span>
        DEPARTURE
      </NavLink>

      <NavLink
        className="navigation__btn navigation-arrival__btn"
        to={`/arrival${location.search}`}
        activeClassName="navigation__btn_selected"
        // className={isActive => 'navigation__btn' + (isActive ? '_selected' : '')}
      >
        <span className="navigation__btn-icon">
          <i className="fas fa-plane-arrival"></i>
        </span>
        ARRIVAL
      </NavLink>
    </div>
  );
};

export default Navigation;
