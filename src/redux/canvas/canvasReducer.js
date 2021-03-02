import {
  SET_FONT_SIZE,
  SET_TEXT_VALUE,
} from './canvasActionTypes';

const INITIAL_STATE = {
  fontSize: '20',
  fontColor: '#ffffff',
  bgColor: '#007ACC',
  bgImage: '',
  textValue: 'Start typing...',
};

const canvasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload,
      };
    case SET_TEXT_VALUE:
      return {
        ...state,
        textValue: action.payload,
      };
    default:
      return state;
  }
};

export default canvasReducer;
