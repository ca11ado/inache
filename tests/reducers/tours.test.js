let reducer = require('../../js/reducers/ToursReducer');
let {
  GET_TOURS,
  GET_TOURS_YEARS
} = require('../../js/actions/action-types');

describe('tours reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      tours: [], years: [], loader: true
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return state with tours items', () => {
    let tours = [{ tour: 1 }, { tour: 2 }];
    expect(
      reducer(initialState, { tours, type: GET_TOURS })
    ).toEqual({ loader: true, tours, years: [] });
  });

  it('should return state with tours years', () => {
    let years = [2015, 2016];
    expect(
      reducer(initialState, { years, type: GET_TOURS_YEARS })
    ).toEqual({ loader: true, years, tours: [] });
  });
});