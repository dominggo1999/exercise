import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="portfolio">
        <Sidebar />
      </div>
    </Router>
  );
};

export default App;
