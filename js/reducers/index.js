import { combineReducers } from 'redux';

// Reducers
import pressReducer from './press-reducer';

// Combine Reducers
var reducers = combineReducers({
  pressState: pressReducer
});

module.exports = reducers;