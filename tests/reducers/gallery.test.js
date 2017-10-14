let reducer = require('../../js/reducers/GalleryReducer');
let {
  GET_ALBUMS,
  GET_ALBUMS_YEARS,
  GET_ALBUM
} = require('../../js/actions/action-types');

describe('gallery reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      album: {}, albums: [], years: [], loader: true
    };
  });

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should return state with albums', () => {
    let albums = [{ album: 1 }, { album: 2 }];
    expect(
      reducer(initialState, { albums, type: GET_ALBUMS })
    ).toEqual({ album: {}, years: [], albums, loader: true });
  });

  it('should return state with years', () => {
    let years = [2015, 2016];
    expect(
      reducer(initialState, { years, type: GET_ALBUMS_YEARS })
    ).toEqual({ album: {}, years, albums: [], loader: true });
  });

  it('should return state with album', () => {
    let album = { name: 1 };
    expect(
      reducer(initialState, { album, type: GET_ALBUM })
    ).toEqual({ albums: [], years: [], album, loader: true });
  });
});