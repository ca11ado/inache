const TYPES = require('../constants/AllConstants');

const DEFAULT_STATE = { album: {}, albums: [], years: [] };

let MusicReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_MUSIC_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    case TYPES.GET_MUSIC_ALBUM:
      return Object.assign({}, state, { album: action.album });
  }

  return state;
};

module.exports = MusicReducer;