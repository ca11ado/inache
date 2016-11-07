let _ = require('lodash');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let AllConstants = require('../constants/AllConstants');
let api = require('./DataBaseMock');

let CHANGE_EVENT = 'change';
let _albums = [];
let _album = {};

function setAlbums (albums) {
  _albums = albums;
}

function setAlbum (album) {
  _album = album;
}

let ItemsStore = Object.assign({}, EventEmitter.prototype, {
  /**
   * Вытащить из store новости
   * @returns {Array}
   */
  getAlbums: () => {
    return _albums;
  },

  getAlbum: () => {
    return _album;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AllConstants.GET_MUSIC_ALBUMS:
      api.getSectionItems('music')
        .then((items) => {
          setAlbums(items);
          ItemsStore.emitChange();
        })
        .catch((e) => console.log('Error in MusicStore: get albums'));
      break;
    case AllConstants.GET_MUSIC_ALBUM:
      let albumUrlName = _.get(action, 'albumUrlName');
      api.getMusicAlbum(albumUrlName)
        .then((album) => {
          setAlbum(album);
          ItemsStore.emitChange();
        })
        .catch((e) => console.log('Error in MusicStore: get album'));
      break;
    default:
    // no op
  }
});

module.exports = ItemsStore;
