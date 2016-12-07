let _ = require('lodash');
let css = require('./album.css');
let React = require('react');
let moment = require('moment');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let Header = require('../../MainBlock/Header/header');
let SubNavigation = require('../../SubNavigation/subNavigation');
let MainBlock = require('../../MainBlock/mainBlock');
let Content = require('../../MainBlock/content/content');

let Cover = require('./Cover/Cover');
let About = require('./About/About');
let PlayList = require('./PlayList/PlayList');
let Song = require('./Song/Song');

const API = require('../../../api');

let AlbumContainer = React.createClass({
  componentDidMount () {
    const albumId = this.props.params.albumId;
    API
      .getMusicAlbum(albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_MUSIC_ALBUM,
          album
        });
      });
  },

  render () {
    let backLink = [{ title: `Back to albums`, link: '' }];

    let { album } = this.props;
    let receivedSongNumber = this.props.params.activeSongNumber - 1;

    let { photo, name, songs = [], about, urlName } = album;
    let activeSongNumber = isExist(receivedSongNumber, songs.length)
      ? receivedSongNumber : 0;
    let song = _.get(songs, activeSongNumber, '');
    let playerLink = _.get(song, 'playerLink', '');

    return (
      <MainBlock>
        <Header>Фотографии в альбоме</Header>
        <SubNavigation base='music' list={backLink} />
        <Content>
          <div className={css.block}>
            <div className={`${css.half} ${css.rightHalf}`}>
              <div>
                <div className={css.cell}>
                  <Cover photo={photo} />
                </div>
                <div className={css.cell}>
                  <PlayList
                    name={name}
                    songs={songs}
                    activeSong={activeSongNumber}
                    urlName={urlName}
                  />
                </div>
              </div>
              <div>
                <About about={about} />
              </div>
            </div>

            <div className={`${css.half} ${css.rightHalf}`}>
              <div>
                <iframe width="404" height="201" src={playerLink}></iframe>
              </div>
              <div>
                <Song song={song} />
              </div>
            </div>
          </div>
        </Content>
      </MainBlock>
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