let reducer = require('../../js/reducers/Music');
let {
  GET_MUSIC_ALBUMS,
  GET_MUSIC_ALBUM,
  SET_ACTIVE_SONG_NUMBER
} = require('../../js/actions/action-types');

describe('music reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      album: {}, albums: [], activeSongNumber: 1, loader: true
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
      reducer(initialState, { albums, type: GET_MUSIC_ALBUMS })
    ).toEqual({ album: {}, albums, activeSongNumber: 1, loader: true });
  });

  it('should return state with album', () => {
    let album = { name: 1 };
    expect(
      reducer(initialState, { album, type: GET_MUSIC_ALBUM })
    ).toEqual({ album, albums: [], activeSongNumber: 1, loader: true });
  });

  it('should return state with active song with number 2', () => {
    let activeSongNumber = 2;
    expect(
      reducer(initialState, { activeSongNumber, type: SET_ACTIVE_SONG_NUMBER })
    ).toEqual({ albums: [], album: {}, activeSongNumber, loader: true });
  });
});