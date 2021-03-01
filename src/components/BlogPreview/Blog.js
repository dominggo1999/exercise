import React, { useRef, useEffect } from 'react';
import moment from 'moment';
import { v4 } from 'uuid';

const Blog = ({ blog }) => {
  const {
    title, author, created, categories, content,
  } = blog;

  // This is a very ugly solution
  if(!created) return null;

  const ref = useRef('');

  const formatDate = moment.unix(created.seconds).format('MMMM Do YYYY, h:mm:ss a');

  useEffect(() => {
    ref.current.innerHTML = content;
  }, []);

  return (
    <div className="blog">
      <h1>{title}</h1>
      <h5>{author}</h5>
      <p>{formatDate}</p>
      <div>
        {
          categories.map((category) => {
            return (
              <span key={v4()}><a href={`/${category}`}>{category}</a> </span>
            );
          })
        }
      </div>
      <div className="content" ref={ref} />

    </div>
  );
};

export default Blog;
