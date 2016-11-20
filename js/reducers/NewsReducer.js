const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { news: [], years: [] };

let NewsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_NEWS:
      return Object.assign({}, state, { news: action.news });
    case TYPES.GET_NEWS_YEARS:
      return Object.assign({}, state, { years: action.years });
  }

  return state;
};

module.exports = NewsReducer;