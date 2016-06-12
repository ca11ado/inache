var AppDispatcher = require('../dispatcher/AppDispatcher');
var AllConstants = require('../constants/AllConstants');

var NewsActions = {

  getNewsForYear: function(year) {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_NEWS,
      year
    });
  },
  
  getToursForYear: function(year) {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_TOURS,
      year
    });
  },
  
  getAvailableYearsForTour: function() {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_TOURS_YEARS
    });
  },

  getAvailableYears: function () {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_YEARS
    })
  },

  /**
   * Получить какое-то количество последних новостей
   * @param {Number} count
   */
  getLastNews: function (count = 2) {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_LAST_NEWS,
      count
    });
  }
};

module.exports = NewsActions;
