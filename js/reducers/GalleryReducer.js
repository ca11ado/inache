const TYPES = require('../actions/action-types');

const DEFAULT_STATE = {
  album: {},
  albums: [],
  years: [],
  loader: true
};

let GalleryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_ALBUMS:
      return Object.assign({}, state, { albums: action.albums });
    case TYPES.GET_ALBUMS_YEARS:
      return Object.assign({}, state, { years: action.years });
    case TYPES.GET_ALBUM:
      return Object.assign({}, state, { album: action.album });
    case TYPES.SET_GALLERY_LOADER:
      return Object.assign({}, state, { loader: true });
    case TYPES.UNSET_GALLERY_LOADER:
      return Object.assign({}, state, { loader: false });
  }

  return state;
};

module.exports = GalleryReducer;