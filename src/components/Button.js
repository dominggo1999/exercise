import React from 'react';

const Button = ({ title, handleClick, primary }) => {
  return (
    <>
      <button
        className={`btn ${primary ? 'primary' : ''}`}
        onClick={handleClick}
      >{title}
      </button>
    </>
  );
};

export default Button;
