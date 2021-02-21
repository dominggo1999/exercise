import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../static';

const Testimonials = () => {
  return (
    <div className="container">
      <SectionTitle
        title="Our Clients Say"
        subtitle="TESTIMONIALS"
      />
      <div className="wrapper">
        {
          testimonials.map(({ id, ...restProps }) => {
            return (
              <TestimonialCard
                key={id}
                {...restProps}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Testimonials;
