import React from 'react';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import { setTextValue } from '../../redux/canvas/canvasActions';

const TextInput = ({ setTextValue, textValue }) => {
  const handleTextAreaChange = (e) => {
    // Add br to textarea
    // const formatInput = e.target.value.replace(/\r\n|\r|\n/g, '&#13;&#10;');

    console.log(e.target.value);

    setTextValue(e.target.value);
  };

  const downloadImage = (e) => {
    // Download func
    const saveScreenshot = (canvas) => {
      const fileName = 'image';
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      canvas.toBlob((blob) => {
        link.href = URL.createObjectURL(blob);
        link.click();
      });
    };

    html2canvas(document.querySelector('#canvas')).then((canvas) => {
      // document.body.appendChild(canvas);
      saveScreenshot(canvas);
    });
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
      <button onClick={downloadImage}>Download</button>
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
