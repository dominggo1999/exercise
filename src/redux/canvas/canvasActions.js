import {
  SET_FONT_SIZE,
  SET_TEXT_VALUE,
  SET_TEXT_COLOR,
  SET_BACKGROUND_COLOR,
} from './canvasActionTypes';

export const setFontSize = (size) => ({
  type: SET_FONT_SIZE,
  payload: size,
});

export const setTextValue = (value) => ({
  type: SET_TEXT_VALUE,
  payload: value,
});

export const setTextColor = (textColor) => ({
  type: SET_TEXT_COLOR,
  payload: textColor,
});

export const setBgColor = (bgColor) => ({
  type: SET_BACKGROUND_COLOR,
  payload: bgColor,
});
