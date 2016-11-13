import * as types from '../actions/action-types';

export function getPressItems (pressItems) {
  return {
    type: types.GET_PRESS_ITEMS,
    pressItems
  }
}
