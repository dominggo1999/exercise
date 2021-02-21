import React from 'react';
import MenuCard from './MenuCard';
import { menuData } from '../static';

const MenuPreviewSection = () => {
  return (
    <div className="menu-preview container">
      <h1 className="menu__preview__title">Freshly Taste</h1>
      <div className="menu__preview__subtitle">
        NEW IN OUR MENU
      </div>
      <div className="card-container">
        {
          menuData.map(({ id, ...restProps }) => {
            return (
              <MenuCard
                key={id}
                {...restProps}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default MenuPreviewSection;
