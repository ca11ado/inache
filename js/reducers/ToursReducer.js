const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { tours: [], years: [], loader: true };

let ToursReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_TOURS:
      return Object.assign({}, state, { tours: action.tours });
    case TYPES.GET_TOURS_YEARS:
      return Object.assign({}, state, { years: action.years });
    case TYPES.SET_TOURS_LOADER:
      return Object.assign({}, state, { loader: true });
    case TYPES.UNSET_TOURS_LOADER:
      return Object.assign({}, state, { loader: false });
  }

  return state;
};

module.exports = ToursReducer;