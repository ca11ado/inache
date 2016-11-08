let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let MusicStore = require('../../../stores/MusicStore');
let MusicActions = require('../../../actions/MusicActions');

let Cover = require('./Cover/Cover');
let About = require('./About/About');
let PlayList = require('./PlayList/PlayList');
let Song = require('./Song/Song');

const DEFAULT_SONG_NUMBER = 0;

function getAlbumState () {
  return {
    album: MusicStore.getAlbum(),
    activeSongNumber: MusicStore.getActiveSongNumber()
  };
}

let Album = React.createClass({
  getInitialState () {
    let albumUrlName = this.props.params.album;
    MusicActions.getAlbum(albumUrlName);
    MusicActions.setActiveSongNumber(DEFAULT_SONG_NUMBER);

    return getAlbumState();
  },

  componentDidMount: function () {
    MusicStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    MusicStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (nextProps) {
  },

  render () {
    let backLink = [{ title: `Back to albums`, link: '' }];
    
    let { photo, name, songs, about } = this.state.album;
    let activeSongNumber = this.state.activeSongNumber;
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
            <PlayList name={name} songs={songs} activeSong={activeSongNumber} />
            <div>{playerIframe}</div>
            <About about={about} />
            <Song song={song} />
          </div> 
        </Content>
      </MainBlock>
    );
  },

  _onChange () {
    this.setState(getAlbumState());
  }
});

module.exports = Album;