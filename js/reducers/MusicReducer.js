const TYPES = require('../constants/AllConstants');

const DEFAULT_STATE = { albums: [], album: {}, activeSongNumber: 1 };

let MusicReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_MUSIC_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    case TYPES.GET_MUSIC_ALBUM:
      return Object.assign({}, state, { album: action.album });
    case TYPES.SET_ACTIVE_SONG_NUMBER:
      return Object.assign({}, state, { activeSongNumber: action.activeSongNumber });
  }

  return state;
};

module.exports = MusicReducer;