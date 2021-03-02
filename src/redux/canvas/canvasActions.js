import {
  SET_FONT_SIZE,
  SET_TEXT_VALUE,
} from './canvasActionTypes';

export const setFontSize = (size) => ({
  type: SET_FONT_SIZE,
  payload: size,
});

export const setTextValue = (value) => ({
  type: SET_TEXT_VALUE,
  payload: value,
});
