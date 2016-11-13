let TYPES = require('../actions/action-types');

const initialState = {
  pressItems: [{ date: '', header: '', author: '', link: '' }]
};

const pressReducer = function(state = initialState, action) {

  switch(action.type) {
    case TYPES.GET_PRESS_ITEMS:
      return Object.assign({}, state, { pressItems: action.pressItems });
  }

  return state;
};

module.exports = pressReducer;