import { combineReducers } from 'redux';

// Reducers
let pressReducer = require('./press-reducer');
let galleryReducer = require('./GalleryReducer');
let toursReducer = require('./ToursReducer');
let musicReducer = require('./MusicReducer');

// Combine Reducers
let reducers = combineReducers({
  pressState: pressReducer,
  galleryState: galleryReducer,
  toursState: toursReducer,
  musicState: musicReducer
});

module.exports = reducers;