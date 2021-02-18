import React from 'react';
import RandomV1 from './components/RandomV1';
import RandomV2 from './components/RandomV2';
import TagV1 from './components/TagV1';
import TagV2 from './components/TagV2';

const App = () => {
  return (
    <div className="container">
      {/* <RandomV1 /> */}
      <RandomV2 />
      {/* <TagV1 /> */}
      <TagV2 />
    </div>
  );
};

export default App;
