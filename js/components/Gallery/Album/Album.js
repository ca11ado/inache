let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let AlbumActions = require('../../../actions/GalleryActions');
let GalleryStore = require('../../../stores/GalleryStore');

function getAlbumState () {
  return {
    album: GalleryStore.getAlbum()
  };
}

let PhotoPreview = React.createClass({
  render () {
    let { src, link } = this.props.photo;

    return (
      <div className={css.photoPreview}>
        <a href={link}>
          <img className={css.previewImg} src={src} />
        </a>
      </div>
    );
  }
});

let Album = React.createClass({
  getInitialState () {
    let albumId = this.props.params.album;
    AlbumActions.getAlbum(albumId);
    
    return { album: {} } ;
  },

  componentDidMount: function () {
    GalleryStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    GalleryStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (nextProps) {
  },

  render () {
    let year = this.props.params.year;
    let album = this.props.params.album;
    let backLink = [{ title: `Back to ${year}`, link: year }];
    let images = _.get(this.state.album, 'photos', []);

    let imagesPreview = _.map(images, (image, index) => {
      let props = {
        key: `preview-image-${index}`,
        photo: {
          src: image.original,
          link: `/gallery/${year}/${album}/${index}`
        }
      };
      return <PhotoPreview { ...props } />;
    });

    return (
      <MainBlock>
        <Header>Фотографии в альбоме</Header>
        <SubNavigation base='gallery' list={backLink}/>
        <Content>
          <div className={css.block}>{imagesPreview}</div>
        </Content>
      </MainBlock>
    );
  },

  _onChange () {
    this.setState(getAlbumState());
  }
});

module.exports = Album;