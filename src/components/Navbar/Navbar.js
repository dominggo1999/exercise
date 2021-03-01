import React from 'react';
import { BiAnalyse } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__brand">
        {/* image or log here */}
        <BiAnalyse />
      </div>
      <div className="nav__mobile-menu-icon">
        <FaHamburger />
      </div>
      <div className="nav__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="selected"
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/admin"
              activeClassName="selected"
            >Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              activeClassName="selected"
            >Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
