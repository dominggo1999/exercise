import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebaseUtils';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const query = db.collection('categories');
    const getCategories = async () => {
      const snapshot = await query.get();
      const data = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      setCategories(data);
    };

    const unsubscribe = query.onSnapshot(getCategories, (err) => console.log(err));
    return () => unsubscribe();
  }, []);

  return (
    <div className="categories">
      {
        categories ? categories.map(({ category }) => {
          return (
            <span key={uuid()}><Link to={`/?category=${category}`}>#{category}</Link> </span>
          );
        }) : <p>Loading category ....</p>
      }
    </div>
  );
};

export default Categories;
