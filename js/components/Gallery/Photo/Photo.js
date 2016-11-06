let _ = require('lodash');
let css = require('./Photo.css');
let React = require('react');
let moment = require('moment');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let GalleryStore = require('../../../stores/GalleryStore');
let GalleryAction = require('../../../actions/GalleryActions');

let Gallery = require('react-image-gallery').default;

require('style!css!sass!react-image-gallery/styles/scss/image-gallery.scss');

function getPhotoState () {
  return {
    album: GalleryStore.getAlbum()
  };
}

let Photo = React.createClass({
  getInitialState () {
    let albumId = this.props.params.album;
    GalleryAction.getAlbum(albumId);

    return {
      album: {}
    };
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
    let albumId = this.props.params.album;
    let photos = _.get(this.state.album, 'photos', []);
    let photoNumber = Number(this.props.params.photo);
    let backLink = [{ title: `Back to album`, link: `${year}/${albumId}` }];
    let startIndex = photoNumber > photos.length ? 0 : photoNumber;

    let GalleryProps = {
      items: photos,
      startIndex,
      slideInterval: 2000,
      onImageLoad: this.handleImageLoad,
      showIndex: true
    };
    let Gall = photos.length > 0
      ? React.createElement(Gallery, GalleryProps)
      : '';

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='gallery' list={backLink}/>
        <Content>
          <div>
            {Gall}
          </div>
        </Content>
      </MainBlock>
    );
  },

  _onChange () {
    this.setState(getPhotoState());
  },

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
});

module.exports = Photo;