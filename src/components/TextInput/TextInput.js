import React from 'react';
import { connect } from 'react-redux';
import { setTextValue } from '../../redux/canvas/canvasActions';

const TextInput = ({ setTextValue, textValue }) => {
  const handleTextAreaChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="text-input-container">
      <h1>QUOTEZ</h1>
      <textarea
        name="textInput" id="textInput"
        cols="30" rows="10"
        onChange={handleTextAreaChange}
        value={textValue}
      >
      </textarea>
    </div>
  );
};

const mapStateToProps = (state) => ({
  textValue: state.canvas.textValue,
});

const mapDispatchToProps = (dispatch) => ({
  setTextValue: (value) => dispatch(setTextValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
