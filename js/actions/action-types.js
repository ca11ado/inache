let keyMirror = require('keymirror');

module.exports = keyMirror({
  // PRESS PAGE
  GET_PRESS_ITEMS: null,

  // NEWS PAGE
  GET_NEWS: null,
  GET_NEWS_YEARS: null,
  GET_LAST_NEWS: null,
  SET_NEWS_LOADER: null,
  UNSET_NEWS_LOADER: null,

  GET_YEARS: null,
  GET_TOURS: null,
  GET_TOURS_YEARS: null,
  GET_FEATURE_TOURS: null,
  SET_TOURS_LOADER: null,
  UNSET_TOURS_LOADER: null,

  GET_ALBUMS_YEARS: null,
  GET_ALBUMS: null,
  GET_ALBUM: null,
  SET_GALLERY_LOADER: null,
  UNSET_GALLERY_LOADER: null,
  SET_ALBUM_LOADER: null,
  UNSET_ALBUM_LOADER: null,

  // MUSIC PAGE
  GET_MUSIC_ALBUMS: null,
  GET_MUSIC_ALBUM: null,
  SET_ACTIVE_SONG_NUMBER: null,
  SET_MUSIC_LOADER: null,
  UNSET_MUSIC_LOADER: null,

  // MODALS
  SET_MODAL_TEXT: null,
  SET_MODAL_IMAGE: null,
  SET_MODAL_OPEN: null,
  SET_MODAL_CLOSE: null
});
