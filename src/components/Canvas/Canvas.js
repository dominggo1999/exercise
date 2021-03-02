import React from 'react';
import TextCanvas from './TextCanvas';

const Canvas = () => {
  return (
    <div className="canvas">
      <div className="canvas-square">
        <div className="canvas-bgColor" />
        <div className="canvas-bgImage" />
        <TextCanvas />
      </div>
    </div>
  );
};

export default Canvas;
