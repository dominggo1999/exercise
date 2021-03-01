import React, { useState, useEffect, useMemo } from 'react';
import { FaDove } from 'react-icons/fa';
import Blog from './Blog';
import { db } from '../../firebase/firebaseUtils';

const BlogPreview = ({ category }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const categoryToGet = category
      ? db.collection('blogs').where('categories', 'array-contains', category)
      : db.collection('blogs');

    const query = categoryToGet.orderBy('created', 'desc');

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
  }, [category]);

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
