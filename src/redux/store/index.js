import { createStore, combineReducers } from 'redux';
import locationReducer from '../reducers/locationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  // 다른 리듀서들 추가
});

const store = createStore(rootReducer);

export default store;
