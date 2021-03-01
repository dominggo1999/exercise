import { db } from '../firebase/firebaseUtils';

const deleteBlog = async (id) => {
  const blogRef = await db.collection('blogs').doc(id);

  blogRef.delete();
};

export default deleteBlog;
