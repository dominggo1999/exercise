import React, { useState } from 'react';
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import { setFontSize } from '../../redux/canvas/canvasActions';

const Editor = ({ fontSize, setFontSize }) => {
  const [textColor, setTextColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#000000');
  const [bgImage, setBgImage] = useState('');
  const [bgInputValue, setBgInputValue] = useState('');

  const iconsSettings = {
    className: 'align-text-icon',
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleBgInputChange = (e) => {
    setBgInputValue(e.target.value);
  };

  const addBgImage = (e) => {
    e.preventDefault();

    console.log(bgInputValue);

    setBgImage(bgInputValue);
  };

  return (
    <div className="editor">
      <div className="editor-tab">
        <span>Templates</span>
        <span className="active">Customizer</span>
        <span>Quotes</span>
      </div>
      <div className="font-size-selector">
        <label htmlFor="fontSize">Font Size : {fontSize}</label>
        <input
          name="fontSize"
          id="font-size"
          type="range"
          min="15" max="200"
          onChange={handleFontSizeChange}
          value={fontSize}
          step="2"
        />
      </div>
      <div className="justify-text">
        <IconContext.Provider value={iconsSettings}>
          <div className="left"><AiOutlineAlignLeft /> </div>
          <div className="center"><AiOutlineAlignCenter />  </div>
          <div className="right"><AiOutlineAlignRight />  </div>
        </IconContext.Provider>
      </div>
      <div className="text-color">
        <label htmlFor="textColor">Text Color</label>
        <input
          type="color" id="textColor"
          name="textColor"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </div>
      <div className="background-color">
        <label htmlFor="bgColor">Background Color</label>
        <input
          type="color" id="bgColor"
          name="bgColor"
          value={bgColor}
          onChange={handleBgColorChange}
        />
      </div>
      <div className="background-image">
        <form onSubmit={addBgImage}>
          <label htmlFor="bgImage">Background Image</label>
          <input
            type="text" placeholder="Input image url"
            value={bgInputValue}
            onChange={handleBgInputChange}
          />
          <button type="submit">Add Image</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fontSize: state.canvas.fontSize,
});

const mapDispatchToProps = (dispatch) => ({
  setFontSize: (size) => dispatch(setFontSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
