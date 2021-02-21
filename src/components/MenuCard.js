import React from 'react';

const MenuCard = ({
  category, imageUrl, menuName, price,
}) => {
  return (
    <div className="menu__card">
      <div className="image-container">
        <img
          src={imageUrl}
          alt="Menu-item"
        />
      </div>
      <div className="menu-detail">
        <p className="price">${price}</p>
        <p className="category">{category}</p>
        <h4 className="menu-name">{menuName}</h4>
      </div>
    </div>
  );
};

export default MenuCard;
