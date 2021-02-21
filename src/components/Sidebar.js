import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
import NavMenu from './NavMenu';

const links = [
  { id: 'home-0', link: '/', item: 'home' },
  { id: 'about-1', link: '/about', item: 'about' },
  { id: 'resume-2', link: '/resume', item: 'resume' },
  { id: 'portfolios-3', link: '/portfolios', item: 'portfolios' },
  { id: 'blogs-4', link: '/blogs', item: 'blogs' },
  { id: 'contact-5', link: '/contact', item: 'contact' },
];

const Sidebar = () => {
  const [display, setDisplay] = useState(true);

  const toggleSidebar = () => {
    setDisplay(!display);
  };

  const settings = {
    color: 'a4acc4',
    size: '25px',
  };

  return (
    <div className={`sidebar ${display ? 'display' : ''}`}>
      <IconContext.Provider value={settings}>
        <button
          className="sidebar__button-toggle"
          onClick={toggleSidebar}
        >
          {
          display
            ? <ImCross />
            : <GiHamburgerMenu />
          }
        </button>
      </IconContext.Provider>

      <nav className="sidebar__navigation">
        <div className="sidebar__image-wrapper">
          <div className="sidebar__image-box">
            <img
              src="https://tf-react-chester.now.sh/images/brand-image.jpg"
              alt="Man"
            />
          </div>
        </div>

        <div className="sidebar__menu">
          <ul>
            {links.map(({ id, ...restProps }) => (
              <li key={id}>
                <NavMenu
                  {...restProps}
                />
              </li>
            ))}
          </ul>

        </div>

        <div className="sidebar__copyright">
          <p>
            © 2021 <span className="sidebar__myname">Xrnoldd</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
