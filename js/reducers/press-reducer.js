const TYPES = require('../actions/action-types');

const initialState = {
  pressItems: [{ date: '', header: '', author: '', link: '' }]
};

const pressReducer = function pressReducer (state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRESS_ITEMS:
      return Object.assign({}, state, { pressItems: action.pressItems });
    default:
      return state;
  }
};

module.exports = pressReducer;
