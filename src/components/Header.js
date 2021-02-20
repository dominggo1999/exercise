import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <div className="gradient" />
        <div className="header-title">
          <h2 className="quote">Best Steaks and Grill</h2>
          <h1 className="title">RESTBEEF STEAKHOUSE</h1>
          <p className="description">We are making the original steaks based on traditional recipes. We use only fresh meat from
            the best suppliers. Our staff are professionals, and we make everything to left our clients satisfied.
          </p>
          <div className="cta">
            <button className="menu">Watch Menu</button>
            <button className="booking">Book  a table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
