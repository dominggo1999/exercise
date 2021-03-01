import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { connect } from 'react-redux';
import { db } from '../../firebase/firebaseUtils';
import uploadBlog from './uploadBlog';

// srv https://github.com/gtgalone/react-quilljs

const TextEditor = () => {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;

    if(id === 'blogTitle') setTitle(value);
    else setCategories(value);
  };

  useEffect(() => {
    const getSnapshot = async () => {
      const blogSnapshot = await db.collection('blogs').get();

      const docs = await blogSnapshot.docs.map((doc) => doc.data());
    };

    getSnapshot();
  }, []);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        setContent(content);
      });
    }
  }, [quill]);

  const submitBlog = (e) => {
    e.preventDefault();

    if(title && categories) {
      uploadBlog(title, categories, content);
    }else{
      console.log('please input a title and categories');
    }

    setTitle('');
    setCategories('');
    quill.root.innerHTML = '';
  };

  return (
    <>
      <form>
        <label htmlFor="blogTitle">Title</label>
        <input
          type="text" id="blogTitle"
          name="Blog title"
          placeholder="title"
          onChange={handleChange}
          value={title}
        />
        <label htmlFor="blogCategories">Categories</label>
        <input
          type="text" id="blogCategories"
          name="Categories"
          placeholder="ex : food,travel,meditation"
          onChange={handleChange}
          value={categories}
        />
        <button onClick={submitBlog}>Submit</button>
      </form>
      <div className="container">
        <div style={{ width: 500, height: 300 }}>
          <div ref={quillRef} />
        </div>
      </div>
    </>
  );
};

export default TextEditor;
