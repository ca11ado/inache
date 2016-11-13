import { combineReducers } from 'redux';

// Reducers
let pressReducer = require('./press-reducer');
let galleryReducer = require('./GalleryReducer');
let toursReducer = require('./ToursReducer');
let musicReducer = require('./MusicReducer');
let newsReducer = require('./NewsReducer');

// Combine Reducers
let reducers = combineReducers({
  pressState: pressReducer,
  galleryState: galleryReducer,
  toursState: toursReducer,
  musicState: musicReducer,
  newsState: newsReducer
});

module.exports = reducers;