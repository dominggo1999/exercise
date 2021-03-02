import { combineReducers } from 'redux';
import canvasReducer from './canvas/canvasReducer';

export default combineReducers({
  canvas: canvasReducer,
});
