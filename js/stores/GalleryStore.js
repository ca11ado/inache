let _ = require('lodash');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let AllConstants = require('../constants/AllConstants');
let api = require('./DataBaseMock');

let CHANGE_EVENT = 'change';
let _albums = [];
let _years = [];

function setAlbums (albums) {
  _albums = albums;
}

function setYears (years) {
  _years = years;
}

let ItemsStore = Object.assign({}, EventEmitter.prototype, {
  /**
   * Вытащить из store новости
   * @returns {Array}
   */
  getAlbums: () => {
    return _albums;
  },
  
  getAvailableYears: () => {
    return _years;
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
  let year = _.get(action, 'year');

  switch(action.actionType) {
    case AllConstants.GET_ALBUMS:
      api.getSectionItemsForYear('gallery', year)
        .then((items) => {
          setAlbums(items);
          ItemsStore.emitChange();
        });
      break;
    case AllConstants.GET_ALBUMS_YEARS:
      api.getAvailableYears('gallery')
        .then((items) => {
          setYears(items);
          ItemsStore.emitChange();
        });
      break;
    default:
    // no op
  }
});

module.exports = ItemsStore;
