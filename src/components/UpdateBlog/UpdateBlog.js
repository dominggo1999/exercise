import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { date } from 'faker';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase/firebaseUtils';
import uploadBlog from '../../util/uploadBlog';

const UpdateBlog = ({ edit }) => {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [updating, setUpdating] = useState(true);
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if(id === 'updatedBlogTitle') setTitle(value);
    else setCategories(value);
  };

  console.log(title);

  useEffect(() => {
    const query = db.collection('blogs').doc(edit);

    const getBlog = async () => {
      const snapshot = await query.get();
      const data = snapshot.data();

      if(updating) {
        setTitle(data.title);
        setCategories(data.categories.join(','));
        setContent(data.content);
        setUpdating(false);
      }
    };

    const unsubscribe = query.onSnapshot(getBlog, (err) => {
      console.log(err);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (quill && !updating) {
      quill.root.innerHTML = content;
      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        setContent(content);
      });
    }
  }, [quill, updating]);

  const submitBlog = (e) => {
    e.preventDefault();

    if(title && categories) {
      const updating = true;
      const id = edit;
      uploadBlog(title, categories, content, updating, id);
    }else{
      console.log('please input a title and categories');
    }

    setTitle('');
    setCategories('');
    quill.root.innerHTML = '';
    history.push('/');
  };

  return (
    <>
      <form>
        <label htmlFor="updatedBlogTitle">Title</label>
        <input
          type="text" id="updatedBlogTitle"
          name="Blog title"
          placeholder="title"
          onChange={handleChange}
          value={title}
        />
        <label htmlFor="updatedBlogCategories">Categories</label>
        <input
          type="text" id="blogCategories"
          name="Categories"
          placeholder="ex : food,travel,meditation"
          onChange={handleChange}
          value={categories}
        />
        <button onClick={submitBlog}>Update</button>
      </form>
      <div className="container">
        <div style={{ width: 500, height: 300 }}>
          <div ref={quillRef} />
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
