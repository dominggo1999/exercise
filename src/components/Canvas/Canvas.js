import React from 'react';
import { connect } from 'react-redux';
import TextCanvas from './TextCanvas';

const Canvas = ({ bgColor }) => {
  const bgSettings = {
    background: bgColor,
  };

  return (
    <div className="canvas">
      <div className="canvas-square" id="canvas">
        <div className="canvas-bgColor" style={bgSettings} />
        <div className="canvas-bgImage" />
        <TextCanvas />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bgColor: state.canvas.bgColor,
});

export default connect(mapStateToProps)(Canvas);
