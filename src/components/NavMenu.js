import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = ({ link, item }) => {
  return (
    <>
      <NavLink
        exact={item === 'home'}
        to={link}
        activeClassName="selected"
      ><span>{item}</span>
      </NavLink>
    </>
  );
};

export default NavMenu;
