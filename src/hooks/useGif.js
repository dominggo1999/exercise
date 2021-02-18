import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const errorImageUrl = 'https://media3.giphy.com/media/dsWOUTBz5aae8ET8Ss/giphy.gif?cid=ecf05e47u8xiwkdnniyssvjhqecfad4nc0kjdyk5mh9g7ly8&rid=giphy.gif';

const useGif = (tag) => {
  const [display, setDisplay] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const fetchUrl = async (tag) => {
    setDisplay(false);

    const src = tag ? `${url}&tag=${tag}` : url;
    const { data } = await axios.get(src);
    console.log(data);

    const imageSrc = data.data.type
      ? data.data.images.downsized.url
      : errorImageUrl;

    setImageURL(imageSrc);
    setDisplay(true);
  };

  useEffect(() => {
    fetchUrl(tag);
  }, []);

  return { imageURL, fetchUrl, display };
};

export default useGif;
