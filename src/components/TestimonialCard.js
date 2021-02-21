import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const maxStars = 5;

const TestimonialCard = ({
  imageUrl, name, comment, stars,
}) => {
  const mapStar = (s) => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <IconContext.Provider
          key={`Star-${i}`}
          value={{
            color: `${i < s ? 'red' : '#919191'}`,
            className: 'star',
            size: '20px',
          }}
        >
          <AiFillStar />
        </IconContext.Provider>,
      );
    }
    return(stars);
  };

  return (
    <div className="testimonial-card">
      <div className="top">
        <div className="testimonial-image">
          <img
            src={imageUrl}
            alt="Testimonial"
          />
        </div>
        <div className="top-right">
          <p>{name}</p>
          <div className="stars">
            {mapStar(stars).map((star) => (star))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
