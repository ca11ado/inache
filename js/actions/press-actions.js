const TYPES = require('../actions/action-types');

export function getPressItems (pressItems) {
  return {
    type: TYPES.GET_PRESS_ITEMS,
    pressItems
  }
}
