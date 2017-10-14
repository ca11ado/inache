const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { news: [], years: [], loader: true };

let NewsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_NEWS:
      return Object.assign({}, state, { news: action.news });
    case TYPES.GET_NEWS_YEARS:
      return Object.assign({}, state, { years: action.years });
    case TYPES.SET_NEWS_LOADER:
      return Object.assign({}, state, { loader: true });
    case TYPES.UNSET_NEWS_LOADER:
      return Object.assign({}, state, { loader: false });
  }

  return state;
};

module.exports = NewsReducer;