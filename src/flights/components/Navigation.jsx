import React from 'react';
import '../../styles/navigation.scss';
import { useSearchParams, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let activeStyle = {
    color: '#fff',
    backgroundColor: '#1eb7ee',
  };
  return (
    <div className="navigation">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="navigation__btn navigation-departure__btn"
        to={`/departure${location.search}`}
      >
        <span className="navigation__btn-icon">
          <i className="fas fa-plane-departure"></i>
        </span>
        DEPARTURE
      </NavLink>

      <NavLink
        className="navigation__btn navigation-arrival__btn"
        to={`/arrival${location.search}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
