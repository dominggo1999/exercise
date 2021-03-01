import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TextEditor from './components/TextEditor/TextEditor';
import BlogPreview from './components/BlogPreview/BlogPreview';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          component={BlogPreview}
        />
        <Route
          exact path="/admin"
          component={TextEditor}
        />
      </Switch>
    </div>
  );
};

export default App;
