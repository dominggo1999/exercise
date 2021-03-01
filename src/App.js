import React from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TextEditor from './components/TextEditor/TextEditor';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Categories from './components/Categories/Categories';
import UpdateBlog from './components/UpdateBlog/UpdateBlog';

const App = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  const edit = new URLSearchParams(location.search).get('edit');

  return (
    <div className="blog-app">
      <Navbar />
      <Categories />
      <Switch>
        <Route
          exact path="/"
          render={() => <BlogPreview category={category} />}
        />
        <Route
          exact path="/admin"
          component={TextEditor}
        />
        <Route path="/adminEdit" render={() => <UpdateBlog edit={edit} />} />
      </Switch>
    </div>
  );
};

export default App;
