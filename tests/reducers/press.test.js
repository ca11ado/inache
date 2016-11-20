let reducer = require('../../js/reducers/press-reducer');
let {
  GET_PRESS_ITEMS
} = require('../../js/actions/action-types');

describe('press reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      pressItems: [{ date: '', header: '', author: '', link: '' }]
    };
  });

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should return state with press items', () => {
    let pressItems = [
      { date: '1', header: '1', author: '1', link: '1' },
      { date: '2', header: '2', author: '2', link: '2' }
    ];
    expect(
      reducer(initialState, { pressItems, type: GET_PRESS_ITEMS })
    ).toEqual({ pressItems });
  });
});