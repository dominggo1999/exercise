import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
