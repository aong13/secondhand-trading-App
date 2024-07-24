export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';

export const setCurrentLocation = (coords) => ({
  type: SET_CURRENT_LOCATION,
  payload: coords,
});
