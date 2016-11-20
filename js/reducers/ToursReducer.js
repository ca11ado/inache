const TYPES = require('../actions/action-types');

const DEFAULT_STATE = { tours: [], years: [] };

let ToursReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_TOURS:
      return Object.assign({}, state, { tours: action.tours });
    case TYPES.GET_TOURS_YEARS:
      return Object.assign({}, state, { years: action.years });
  }

  return state;
};

module.exports = ToursReducer;