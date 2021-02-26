import { mobileIconTypes } from './mobileIconTypes';

const INITIAL_STATE = {
  displayNavMenu: false,
};

const mobileIconReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mobileIconTypes.TOGGLE_NAV_MENU:
      return {
        ...state,
        displayNavMenu: !state.displayNavMenu,
      };
    default:
      return INITIAL_STATE;
  }
};

export default mobileIconReducer;
