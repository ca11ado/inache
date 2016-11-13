const TYPES = require('../constants/AllConstants');

let GalleryActions = {

  getAlbumsForYear: (albums) => {
    return {
      type: TYPES.GET_ALBUMS,
      albums
    };
  },

  getAvailableYears: (years) => {
    return {
      type: TYPES.GET_ALBUMS_YEARS,
      years
    };
  },

  getAlbum: (album) => {
    return {
      type: TYPES.GET_ALBUM,
      album
    };
  }
};

module.exports = GalleryActions;
