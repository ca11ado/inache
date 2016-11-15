import { combineReducers } from 'redux';

// Reducers
let pressReducer = require('./press-reducer');
let galleryReducer = require('./GalleryReducer');

// Combine Reducers
let reducers = combineReducers({
  pressState: pressReducer,
  galleryState: galleryReducer
});

module.exports = reducers;