import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="menu__preview__title">{title}</h1>
      <div className="menu__preview__subtitle">{subtitle}</div>
    </>
  );
};

export default SectionTitle;
