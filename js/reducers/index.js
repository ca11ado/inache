import { combineReducers } from 'redux';

// Reducers
const pressReducer = require('./press-reducer');
const galleryReducer = require('./GalleryReducer');
const toursReducer = require('./ToursReducer');
const musicReducer = require('./MusicReducer');
const newsReducer = require('./NewsReducer');
const modalReducer = require('./ModalReducer');

// Combine Reducers
const reducers = combineReducers({
  pressState: pressReducer,
  galleryState: galleryReducer,
  toursState: toursReducer,
  musicState: musicReducer,
  newsState: newsReducer,
  modalState: modalReducer
});

module.exports = reducers;
