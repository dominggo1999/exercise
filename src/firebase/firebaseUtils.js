import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC4fWZdnW8_Yei-5EAtQIRqXGRMIeymlVw',
  authDomain: 'blog-63c19.firebaseapp.com',
  projectId: 'blog-63c19',
  storageBucket: 'blog-63c19.appspot.com',
  messagingSenderId: '60513221670',
  appId: '1:60513221670:web:dca3c42fdeb5724f3f3ae7',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
