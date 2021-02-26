import React from 'react';
import { BiAnalyse } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import { toggleNavMenu } from '../../redux/mobile-icon/mobileIconActions';

const Navbar = ({ displayNavMenu, toggleNavMenu }) => {
  const brandIconSetting = {
    size: '32px',
  };

  return (
    <nav>
      <Container className="custom-container">
        <div className="nav__brand">
          {/* image or log here */}
          <img src="http://exill.dk/demo/kitzu/template/img/img-kitzu-logo.png" alt="ZAEL" />
        </div>
        <div
          className="nav__mobile-menu-icon" onClick={toggleNavMenu}
          role="button"
        >
          <IconContext.Provider value={brandIconSetting}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
        <div className={`nav__menu ${displayNavMenu ? 'display' : null}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                activeClassName="selected"
              >About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="selected"
              >Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="selected"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="selected"
              >
                Blog
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
      </Container>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  displayNavMenu: state.mobileIcon.displayNavMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavMenu: (display) => dispatch(toggleNavMenu(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
