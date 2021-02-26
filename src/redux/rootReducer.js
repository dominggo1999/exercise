import { combineReducers } from 'redux';
import mobileIconReducer from './mobile-icon/mobileIconReducer';

const rootReducer = combineReducers({
  mobileIcon: mobileIconReducer,
});

export default rootReducer;
