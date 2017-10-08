import { combineReducers } from 'redux';

// Reducers
const pressReducer = require('./press-reducer');
const galleryReducer = require('./GalleryReducer');
const toursReducer = require('./ToursReducer');
const musicReducer = require('./Music');
const albumReducer = require('./Music/AlbumReducer');
const newsReducer = require('./NewsReducer');
const modalReducer = require('./ModalReducer');

// Combine Reducers
const reducers = combineReducers({
  pressState: pressReducer,
  galleryState: galleryReducer,
  toursState: toursReducer,
  musicState: musicReducer,
  albumState: albumReducer,
  newsState: newsReducer,
  modalState: modalReducer
});

module.exports = reducers;
