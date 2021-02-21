import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const OurStory = () => {
  return (
    <div className="our-story">
      <div className="container">
        <div className="wrapper">
          <SectionTitle
            title="Our Story"
            subtitle="HOW WE BEGIN"
          />
          <p className="description">The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried service principles. Instead of following trends, we set them. We create steaks and grill we’re proud to serve and deliver it fast, with a smile. No matter where you find us, we’re making sure each meal our clients enjoy is delicious and one-of-a-kind. Our steaks is always perfect and our professional team working hard to make you happy.</p>
          <Button
            content="learn more about us"
            costumClassName="our-story-btn"
          />
        </div>
      </div>
    </div>

  );
};

export default OurStory;
