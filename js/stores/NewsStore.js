let _ = require('lodash');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let AllConstants = require('../constants/AllConstants');
let _database = require('./DataBaseMock');

let assign = require('object-assign');

let CHANGE_EVENT = 'change';
let _news = [];
let _years = [];
let _tours = [];
let _tourYears = [];

function setNews (news) {
  _news = news;
}
function setTours (tours) {
  _tours = tours;
}

function setYears (years) {
  _years = years;
}

function setTourYears (years) {
  _tourYears = years;
}

let TodoStore = assign({}, EventEmitter.prototype, {
  /**
   * Вытащить из store новости
   * @returns {Array}
     */
  getNews: () => {
    return _news;
  },

  /**
   * Получить список лет, для которых есть новости
   * @returns {Array}
   */
  getAvailableYears: () => {
    return _years;
  },

  getAvailableTourYears: () => {
    return _tourYears;
  },

  getTours: () => {
    return _tours;
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
  let count = _.get(action, 'count');

  switch(action.actionType) {
    case AllConstants.GET_NEWS:
      _database.getSectionItemsForYear('news', year)
        .then((items) => {
          setNews(items);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_YEARS:
      _database.getAvailableYears('news')
        .then((years) => {
          setYears(years);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_LAST_NEWS:
      _database.getLastSectionItems('news', count)
        .then((news) => {
          setNews(news);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_TOURS:
      _database.getSectionItemsForYear('tour', year)
        .then((items) => {
          setTours(items);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_TOURS_YEARS:
      _database.getAvailableYears('tour')
        .then((years) => {
          setTourYears(years);
          TodoStore.emitChange();
        });
      break;

    default:
    // no op
  }
});

module.exports = TodoStore;
