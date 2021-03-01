import React, { useRef, useEffect } from 'react';
import moment from 'moment';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import deleteBlog from '../../util/deleteBlog';

const Blog = ({ blog }) => {
  const {
    title, author, created, categories, content, id,
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
      <div className="blog-header">
        <h1>{title}</h1>
        <Link to={`/adminEdit/?edit=${id}`}>  <AiFillEdit /> </Link>
        <button onClick={() => deleteBlog(id)}>
          x
        </button>
      </div>
      <h5>{author}</h5>
      <p>{formatDate}</p>
      <div>
        {
          categories.map((category) => {
            return (
              <span key={v4()}><Link to={`/?category=${category}`}>#{category}</Link> </span>
            );
          })
        }
      </div>
      <div className="content" ref={ref} />

    </div>
  );
};

export default Blog;
