import React from 'react';

const Button = ({
  children, onClick, className, fullWidth,
}) => {
  return (
    <>
      <button
        className={`${className} ${fullWidth ? 'full-width' : null}`}
        onClick={onClick}
      >{children}
      </button>
    </>
  );
};

export default Button;
