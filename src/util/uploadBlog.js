import firebase from 'firebase/app';
import { db } from '../firebase/firebaseUtils';

const uploadBlog = async (blogTitle, blogCategories, blogContent, updating = false, id) => {
  // Cek ada berapa kategori yang mau di upload dan format ke bentuk array
  blogCategories = blogCategories.split(',').map((c) => c.replace(/\s/g, '').toLowerCase());

  blogCategories.forEach(async (category) => {
    const snapShot = db.collection('categories').doc(category);
    const categoryRef = await snapShot.get();

    // console.log(snapShot, categoryRef);

    if(!categoryRef.exist) {
      snapShot.set({
        category,
      });
    }
  });

  // kalau belum ada dokumennya dan mau dibuat, doc nya parameternya kosong
  const collectionRef = await db.collection('blogs');
  // const blogRef = .doc();

  const newData = {
    title: blogTitle,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    author: 'admin',
    categories: blogCategories,
    content: blogContent,
  };

  if(updating) {
    const blogRef = collectionRef.doc(id);
    blogRef.update(newData);
  } else{
    const blogRef = collectionRef.doc();
    blogRef.set(newData);
  }
};

export default uploadBlog;
