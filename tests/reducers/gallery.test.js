let reducer = require('../../js/reducers/GalleryReducer');
const {
  GET_ALBUMS,
  GET_ALBUMS_YEARS,
  GET_ALBUM
} = require('../../js/actions/action-types');

describe('gallery reducers', () => {
  it('should return gallery initial state', () => {
    let initialState = { album: {}, albums: [], years: [] };
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should return gallery albums state', () => {
    let initialState = { album: {}, albums: [], years: [] };
    let albums = [{ album: 1 }, { album: 2 }];
    let action = {
      type: GET_ALBUMS,
      albums: albums
    };
    expect(reducer(initialState, action))
      .toEqual({ album: {}, albums, years: [] });
  });

  it('should return gallery album state', () => {
    let initialState = { album: {}, albums: [], years: [] };
    let album = { name: 1 };
    let action = {
      type: GET_ALBUM,
      album: album
    };
    expect(reducer(initialState, action))
      .toEqual({ album, albums: [], years: [] });
  });

  it('should return gallery years state', () => {
    let initialState = { album: {}, albums: [], years: [] };
    let years = [2016];
    let action = {
      type: GET_ALBUMS_YEARS,
      years
    };
    expect(reducer(initialState, action))
      .toEqual({ album: {}, albums: [], years });
  });
});