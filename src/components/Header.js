import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHands } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const [expand, setExpand] = useState(false);

  const expandNavbar = () => {
    setExpand(!expand);
  };

  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="nav__brand">
            <IconContext.Provider
              value={{
                color: '#0278f3',
                size: '35px',
                className: 'brand-icon',
              }}
            >
              <FaHands />
            </IconContext.Provider>
            <span>vesta</span>
          </div>
          <div
            role="button"
            onClick={expandNavbar}
            className="nav__hamburger-menu"
          >
            <IconContext.Provider
              value={{
                color: '#0278f3',
                size: '30px',
                className: 'hamburger-menu',
              }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
          <div
            className={`nav__menu ${expand ? 'expand' : ''}`}
          >
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="selected"
                >Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  activeClassName="selected"
                >About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact  "
                  activeClassName="selected"
                >Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
