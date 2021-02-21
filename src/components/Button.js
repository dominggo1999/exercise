import React from 'react';

const Button = ({ content, costumClassName }) => {
  return (
    <button className={`btn ${costumClassName}`}>{content}</button>
  );
};

export default Button;
