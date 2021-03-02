import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';
import { useResizeDetector } from 'react-resize-detector';
import CornerDot from './CornerDot';

const TextCanvas = ({ textValue, fontSize, textColor }) => {
  const textStyle = {
    fontSize: `${fontSize}px`,
    color: textColor,
  };

  const [textState, setTextState] = useState({
    x: (500 - 320) / 2,
    y: (500 - 200) / 2,
    width: 320,
    height: 200,
  });

  // Init resize detextor
  const { ref, width, height } = useResizeDetector();
  // When paragraph size change
  useEffect(() => {
    // Update draggable div height

    setTextState({
      ...textState,
      height: height + 20,
    });
  }, [height]);

  const handleDragStop = (e, d) => {
    setTextState({
      ...textState,
      x: d.x,
      y: d.y,
    });
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    setTextState({
      ...textState,
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  };

  return (
    <div className="canvas-text" style={textStyle}>
      <Rnd
        size={{ width: textState.width, height: textState.height }}
        position={{ x: textState.x, y: textState.y }}
        onDragStop={handleDragStop}
        onResizeStop={handleResizeStop}
        bounds="parent"
        className="canvas-text-draggable"
      >
        <CornerDot />
        <p ref={ref}>
          {
            textValue.split('\n').map((item, key) => {
              return <span key={key}>{item}<br /></span>;
            })
          }
        </p>
      </Rnd>
    </div>
  );
};

const mapStateToProps = (state) => ({
  textValue: state.canvas.textValue,
  fontSize: state.canvas.fontSize,
  textColor: state.canvas.textColor,
});

export default connect(mapStateToProps)(TextCanvas);
