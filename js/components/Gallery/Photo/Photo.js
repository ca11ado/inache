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

let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let store = require('../../../store');
const API = require('../../../stores/DataBaseMock');

let Gallery = require('react-image-gallery').default;

require('style!css!sass!react-image-gallery/styles/scss/image-gallery.scss');

let PhotoView = (props) => {
  let year = this.props.params.year;
  let albumId = this.props.params.albumId;
  let photos = _.get(props.album, 'photos', []);
  let photoNumber = Number(this.props.params.photoId);
  let backLink = [{ title: `Back to album`, link: `${year}/${albumId}` }];
  let startIndex = photoNumber > photos.length ? 0 : photoNumber;

  let GalleryProps = {
    items: photos,
    startIndex,
    slideInterval: 2000,
    //onImageLoad: this.handleImageLoad,
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
};


let PhotoContainer = React.createClass({

  componentDidMount () {
    API
      .getAlbum(this.props.params.albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_ALBUM,
          album
        })
      })
  },

  render () {
    let props = {
      album: this.props.album
    };

    return (
      <PhotoView { ...props } />
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(PhotoContainer);