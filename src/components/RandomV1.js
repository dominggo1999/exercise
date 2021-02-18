import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const RandomV1 = () => {
  const [imageURL, setImageURL] = useState('');
  const [display, setDisplay] = useState(false);

  const fetchUrl = async () => {
    setDisplay(false);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized.url;

    setImageURL(imageSrc);
    setDisplay(true);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

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

export default RandomV1;
