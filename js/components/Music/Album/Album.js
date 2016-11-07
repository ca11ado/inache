let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let MusicStore = require('../../../stores/MusicStore');
let MusicActions = require('../../../actions/MusicActions');

function getAlbumState () {
  return {
    album: MusicStore.getAlbum()
  };
}

let Album = React.createClass({
  getInitialState () {
    let albumUrlName = this.props.params.album;
    MusicActions.getAlbum(albumUrlName);

    return { album: {} } ;
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
    let albumUrlName = this.props.album;
    let backLink = [{ title: `Back to albums`, link: '' }];

    return (
      <MainBlock>
        <Header>Фотографии в альбоме</Header>
        <SubNavigation base='music' list={backLink}/>
        <Content>
          <h2>Album name {this.state.album.name}</h2>
        </Content>
      </MainBlock>
    );
  },

  _onChange () {
    this.setState(getAlbumState());
  }
});

module.exports = Album;