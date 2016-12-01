let _ = require('lodash');
let css = require('./album.css');
let React = require('react');
let moment = require('moment');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let AlbumView = require('./AlbumView');

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
    let propsSongNumber = _.get(this.props, 'activeSongNumber', 1);
    let activeSongNumber = this.props.params.activeSongNumber || propsSongNumber;

    let { photo, name, songs, about, urlName } = album;
    let song = _.get(songs, activeSongNumber, '');

    let playerLink = _.get(song, 'playerLink', false);
    let playerIframe = playerLink ? `<<<${playerLink}>>>` : '';

    return (
      <MainBlock>
        <Header>Фотографии в альбоме</Header>
        <SubNavigation base='music' list={backLink} />
        <Content>
          <div className={css.block}>
            <Cover photo={photo} />
            <PlayList
              name={name}
              songs={songs}
              activeSong={activeSongNumber}
              urlName={urlName}
            />
            <div>{playerIframe}</div>
            <About about={about} />
            <Song song={song} />
          </div>
        </Content>
      </MainBlock>
    );
  }
});

const mapStateToProps = ({ musicState }) => ({
  album: musicState.album,
  activeSongNumber: musicState.activeSongNumber
});

module.exports = connect(mapStateToProps)(AlbumContainer);