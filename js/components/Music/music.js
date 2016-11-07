let css = require('./Music.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/content/content.js');
let MusicActions = require('../../actions/MusicActions');
let MusicStore = require('../../stores/MusicStore');

function getMusicState () {
  return {
    albums: MusicStore.getAlbums()
  }
}

let Album = React.createClass({
  render () {
    let { src, name, urlName } = this.props;

    return (
      <div className={css.coverWrap}>
        <a href={`/music/${urlName}`}>
          <img className={css.albumCover} src={src} />
          <div className={css.description}>{name}</div>
        </a>
      </div>
    );
  }
});

let Music = React.createClass({
  getInitialState () {
    MusicActions.getAlbums();
    return {
      albums: []
    };
  },

  componentDidMount: function() {
    MusicStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MusicStore.removeChangeListener(this._onChange);
  },

  render () {
    let albums = this.state.albums;
    let showAlbums = _.map(albums, ({ name, photo: src, urlName }, index) => {
      let props = {
        key: `music-album-cover-${index}`,
        name,
        src,
        urlName
      };

      return <Album { ...props } />;
    });

    return (
      <MainBlock>
        <Header>Музыка</Header>
        <Content>
          <div className={css.albumsWrapper}>{showAlbums}</div>
        </Content>
      </MainBlock>
    );
  },

  _onChange () {
    this.setState(getMusicState());
  }
});

module.exports = Music;