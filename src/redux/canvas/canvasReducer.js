import {
  SET_FONT_SIZE,
  SET_TEXT_VALUE,
  SET_TEXT_COLOR,
  SET_BACKGROUND_COLOR,
} from './canvasActionTypes';

const INITIAL_STATE = {
  fontSize: 20,
  textColor: '#ffffff',
  bgColor: '#007ACC',
  bgImage: '',
  textValue: 'Start typing...',
};

const canvasReducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_FONT_SIZE:
      return {
        ...state,
        fontSize: payload,
      };
    case SET_TEXT_VALUE:
      return {
        ...state,
        textValue: payload,
      };
    case SET_TEXT_COLOR:
      return {
        ...state,
        textColor: payload,
      };

    case SET_BACKGROUND_COLOR:
      return{
        ...state,
        bgColor: payload,
      };
    default:
      return state;
  }
};

export default canvasReducer;
