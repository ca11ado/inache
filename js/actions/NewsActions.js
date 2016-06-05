var AppDispatcher = require('../dispatcher/AppDispatcher');
var AllConstants = require('../constants/AllConstants');

var NewsActions = {

  getNewsForYear: function(year) {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_NEWS,
      year
    });
  },

  getAvailableYears: function () {
    AppDispatcher.dispatch({
      actionType: AllConstants.GET_YEARS
    })
  }
};

module.exports = NewsActions;
