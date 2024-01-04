import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">StudentApp</h1>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/addstudent"
                className="nav-link"
                activeClassName="active"
              >
                AddStudent
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/showstudent"
                className="nav-link"
                activeClassName="active"
              >
                ShowStudent
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
