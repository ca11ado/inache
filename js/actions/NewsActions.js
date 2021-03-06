const AppDispatcher = require('../dispatcher/AppDispatcher');
const AllConstants = require('../constants/AllConstants');

const NewsActions = {

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
  },

  /**
   * Получить n записей самых далеких запланированных концертов
   * @param {Number} count
   */
  getFeatureTours: function (count = 2) {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_FEATURE_TOURS,
      count
    });
  }
};

module.exports = NewsActions;
