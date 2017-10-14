const TYPES = require('../../actions/action-types');

const DEFAULT_STATE = {
  album: {},
  activeSongNumber: 1,
  loader: true
};

let AlbumReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_MUSIC_ALBUM:
      return Object.assign({}, state, { album: action.album });
    case TYPES.SET_ACTIVE_SONG_NUMBER:
      return Object.assign({}, state, { activeSongNumber: action.activeSongNumber });
    case TYPES.SET_ALBUM_LOADER:
      console.log('%c some text %o', 'color:red', 'set loader in album');
      return Object.assign({}, state, { loader: true });
    case TYPES.UNSET_ALBUM_LOADER:
      console.log('%c some text %o', 'color:red', 'unset loader in album');
      return Object.assign({}, state, { loader: false });
  }

  return state;
};

module.exports = AlbumReducer;