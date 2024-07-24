import { SET_CURRENT_LOCATION } from '../actions/locationAction'

const initialState = {
  currentLocation: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
