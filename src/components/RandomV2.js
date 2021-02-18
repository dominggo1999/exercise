import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif';

const RandomV2 = () => {
  const { imageURL, fetchUrl, display } = useGif('');

  const handleClick = () => {
    fetchUrl();
  };

  return (
    <div className="wrap">
      <h1>Find a random GIF</h1>
      <button onClick={handleClick}>Get Random GIF</button>
      <div className="image-container">
        {
          display
            ? (
              <img
                src={imageURL}
                alt="Random"
              />
            )
            : <Loader />
        }
      </div>
    </div>

  );
};

export default RandomV2;
