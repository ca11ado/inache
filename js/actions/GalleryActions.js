var AppDispatcher = require('../dispatcher/AppDispatcher');
var AllConstants = require('../constants/AllConstants');

var NewsActions = {
  
  getAlbumsForYear: (year) => {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_ALBUMS,
      year
    });
  },

  getAvailableYears: () => {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_ALBUMS_YEARS
    });
  },

  getAlbum: (albumId) => {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_ALBUM,
      albumId
    });
  }
};

module.exports = NewsActions;
