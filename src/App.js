import React from 'react';
import { Route } from 'react-router-dom';
import TextInput from './components/TextInput/TextInput';
import Editor from './components/Editor/Editor';
import Canvas from './components/Canvas/Canvas';

const App = () => {
  return (
    <div className="quotez">
      <TextInput />
      <Editor />
      <Canvas />
    </div>
  );
};

export default App;
