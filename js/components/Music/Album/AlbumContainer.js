//import { loaderUtil } from "../../../utils";
import AlbumView from './AlbumView';

let _ = require('lodash');
let React = require('react');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let SubNavigation = require('../../SubNavigation/subNavigation');

const API = require('../../../api');

let AlbumContainer = React.createClass({
  componentDidMount () {
    //loaderUtil.start();
    //store.dispatch({ type: TYPES.SET_LOADER });

    const albumId = this.props.params.albumId;
    API
      .getMusicAlbum(albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_MUSIC_ALBUM,
          album
        });
        //loaderUtil
          //.complete()
          //.then(() => store.dispatch({ type: TYPES.UNSET_LOADER }));
      });
  },

  render () {
    let backLink = [{ title: `Обратно к альбомам`, link: '' }];

    let { album } = this.props;
    let receivedSongNumber = this.props.params.activeSongNumber - 1;

    const songs = _.get(album, 'songs', []);
    let activeSongNumber = isExist(receivedSongNumber, songs.length)
      ? receivedSongNumber : 0;
    let song = _.get(songs, ['songs', activeSongNumber], '');
    let playerLink = _.get(song, 'playerLink', '');

    const props = _.assign({}, album, { activeSongNumber, playerLink, song });

    return (
      <div>
        <SubNavigation base='music' list={backLink}/>
        <AlbumView {...props}/>
      </div>
    );
  }
});

function isExist (number, songsCount) {
  return (number >= 0) && (number < songsCount);
}

const mapStateToProps = ({ musicState }) => ({
  album: musicState.album,
  activeSongNumber: musicState.activeSongNumber
});

module.exports = connect(mapStateToProps)(AlbumContainer);