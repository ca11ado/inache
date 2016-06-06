let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let AllConstants = require('../constants/AllConstants');
let _database = require('./DataBaseMock');

let assign = require('object-assign');

let CHANGE_EVENT = 'change';
let _news = [];
let _years = [];

function setNews (news) {
  _news = news;
}

function setYears (years) {
  _years = years;
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
    case AllConstants.GET_NEWS:
      let year = action.year;
      _database.getNewsForYear(year)
        .then((news) => {
          setNews(news);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_YEARS:
      _database.getAvailableYears()
        .then((years) => {
          setYears(years);
          TodoStore.emitChange();
        });
      break;

    case AllConstants.GET_LAST_NEWS:
      let count = action.count;
      _database.getLastNews(count)
        .then((news) => {
          setNews(news);
          TodoStore.emitChange();
        });
      break;

    default:
    // no op
  }
});

module.exports = TodoStore;
