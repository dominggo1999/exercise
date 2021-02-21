import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [expandNavMobile, setExpandNavMobile] = useState(false);

  const toggleNav = () => {
    setExpandNavMobile(!expandNavMobile);
  };

  return (
    <nav>
      <div className="nav-brand">
        <Link
          to="/"
          className="nav-brand-logo"
        >
          <img
            src="https://demo-storage.com/pm/html/restbeef/img/logo.png"
            alt="Restbeef Logo"
          />
        </Link>
      </div>
      <div
        className="nav-menu-mobile"
        role="button"
        onClick={toggleNav}
      >
        <IconContext.Provider
          value={{
            color: 'white',
            size: '30px',
            className: 'global-class-name',
          }}
        >
          <FaGripLines />
        </IconContext.Provider>
      </div>

      <div
        className={`nav-menu ${expandNavMobile ? 'expand' : ''}`}
      >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li className="btn-nav"><Link to="/">Book a Table</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
