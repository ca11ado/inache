let actions = require('../../js/actions/GalleryActions');
let types = require('../../js/actions/action-types');

describe('gallery actions', () => {
  it('get albums for year', () => {
    let albums = [{ album: 1 }, { album: 2 }];
    let expectedAction = {
      type: types.GET_ALBUMS,
      albums
    };

    expect(actions.getAlbumsForYear(albums))
      .toEqual(expectedAction);
  });

  it('get available years', () => {
    let years = [2015, 2016];
    let expectedAction = {
      type: types.GET_ALBUMS_YEARS,
      years
    };

    expect(actions.getAvailableYears(years))
      .toEqual(expectedAction);
  });

  it('get specified album', () => {
    let album = { album: 1 };
    let expectedAction = {
      type: types.GET_ALBUM,
      album
    };

    expect(actions.getAlbum(album))
      .toEqual(expectedAction);
  });
});