import {combineReducers} from 'redux';
import getCurrentPositionReducer from './Reducers/getCurrentPosition';

const rootReducer = combineReducers({
  getCurrentPositionReducer,
});

export default rootReducer;
