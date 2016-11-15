const TYPES = require('../constants/AllConstants');

const DEFAULT_STATE = { album: {}, albums: [], years: [] };

let GalleryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    case TYPES.GET_ALBUMS_YEARS:
      return Object.assign({}, state, { years: action.years });
    case TYPES.GET_ALBUM:
      return Object.assign({}, state, { album: action.album });
  }

  return state;
};

module.exports = GalleryReducer;