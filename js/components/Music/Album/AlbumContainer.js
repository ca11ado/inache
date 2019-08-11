import styled from 'styled-components';
import { ThreeBallsLoader } from 't0s-components';
import { loaderUtil } from "../../../utils";
import AlbumView from './AlbumView';
import { alt } from './../../../composes/colors-scheme';

let _ = require('lodash');
let React = require('react');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let SubNavigation = require('../../SubNavigation/subNavigation');

const API = require('../../../api');

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class AlbumContainer extends React.Component {
  componentDidMount () {
    loaderUtil.start();
    store.dispatch({ type: TYPES.SET_ALBUM_LOADER });

    const albumId = this.props.params.albumId;
    API
      .getMusicAlbum(albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_MUSIC_ALBUM,
          album
        });
        loaderUtil
          .complete()
          .then(() => store.dispatch({ type: TYPES.UNSET_ALBUM_LOADER }));
      });
  }

  render () {
    let backLink = [{ title: `Обратно к альбомам`, link: '' }];

    let { album, loader:isLoader } = this.props;
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
        { isLoader
            ? <LoaderWrapper><ThreeBallsLoader theme={alt} /></LoaderWrapper>
            : <AlbumView {...props}/>
        }
      </div>
    );
  }
}

function isExist (number, songsCount) {
  return (number >= 0) && (number < songsCount);
}

const mapStateToProps = ({ albumState }) => ({
  album: albumState.album,
  loader: albumState.loader,
  activeSongNumber: albumState.activeSongNumber
});

export default connect(mapStateToProps)(AlbumContainer);
