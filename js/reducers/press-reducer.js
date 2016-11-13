import * as types from '../actions/action-types';

const initialState = {
  pressItems: [{ date: '', header: '', author: '', link: '' }]
};

const pressReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PRESS_ITEMS:
      return Object.assign({}, state, { pressItems: action.pressItems });
  }

  return state;

};

export default pressReducer;