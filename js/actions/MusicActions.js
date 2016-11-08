var AppDispatcher = require('../dispatcher/AppDispatcher');
var AllConstants = require('../constants/AllConstants');

var NewsActions = {

  getAlbums: () => {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_MUSIC_ALBUMS
    });
  },

  getAlbum: (albumUrlName) => {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_MUSIC_ALBUM,
      albumUrlName
    });
  },
  
  setActiveSongNumber: (number) => {
    AppDispatcher.dispatch({
      actionType: AllConstants.SET_ACTIVE_SONG_NUMBER,
      number
    })
  }
};

module.exports = NewsActions;
