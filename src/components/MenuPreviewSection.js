import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';
import { menuData } from '../static';

const MenuPreviewSection = () => {
  return (
    <div className="menu-preview container">
      <SectionTitle
        title="Freshly Taste"
        subtitle="NEW IN OUR MENU"
      />
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
