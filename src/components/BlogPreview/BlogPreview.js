import React, { useState, useEffect, useMemo } from 'react';
import { FaDove } from 'react-icons/fa';
import Blog from './Blog';
import { db } from '../../firebase/firebaseUtils';

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = db.collection('blogs').orderBy('created', 'desc');

    const getBlogs = async () => {
      const snapshot = await query.get();
      const data = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setBlogs(data);
    };

    const unsubscribe = query.onSnapshot(getBlogs, (err) => console.log(err));
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {
          blogs.length ? blogs.map((blog) => {
            return (
              <Blog key={blog.id} blog={blog} />
            );
          }) : <p>loading...</p>
        }
    </div>
  );
};

export default BlogPreview;
