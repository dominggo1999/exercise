import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const TagV2 = () => {
  const [tag, setTag] = useState('dogs');
  const { imageURL, fetchUrl, display } = useGif(tag);

  const handleClick = () => {
    fetchUrl(tag);
  };

  return (
    <div className="wrap">
      <h1>Find A Random {tag} GIF</h1>
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={handleClick}>Get Random {tag} GIF</button>
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

export default TagV2;
