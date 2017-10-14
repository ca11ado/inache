let reducer = require('../../js/reducers/NewsReducer');
let {
 GET_NEWS,
 GET_NEWS_YEARS
 } = require('../../js/actions/action-types');

describe('news reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      news: [], years: [], loader: true
    };
  });

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should return state with years', () => {
    let years = [2015, 2016];
    expect(
      reducer(initialState, { years, type: GET_NEWS_YEARS })
    ).toEqual({ years, news: [], loader: true });
  });

  it('should return state with news', () => {
    let news = [{ entity: 1 }, { entity: 2 }];
    expect(
      reducer(initialState, { news, type: GET_NEWS })
    ).toEqual({ news, years: [], loader: true });
  });
});