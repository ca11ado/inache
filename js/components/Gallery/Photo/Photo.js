let _ = require('lodash');
let css = require('./Photo.css');
let React = require('react');
let SubNavigation = require('../../SubNavigation/subNavigation');

let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let store = require('../../../store');
const API = require('../../../api');

let Gallery = require('react-image-gallery').default;

require('style!css!sass!react-image-gallery/styles/scss/image-gallery.scss');

let PhotoView = (props) => {
  let photos = _.get(props.album, 'photos', []);
  let photoNumber = Number(props.photoId);
  let startIndex = photoNumber > photos.length ? 0 : photoNumber;

  let GalleryProps = {
    items: photos,
    startIndex,
    slideInterval: 2000,
    onImageLoad: props.handleImageLoad,
    showIndex: true
  };
  let Gall = photos.length > 0
    ? React.createElement(Gallery, GalleryProps)
    : '';

  return (
    <div>
      {Gall}
    </div>
  );
};


let PhotoContainer = React.createClass({

  componentDidMount () {
    let mainBlock = document.getElementById('mainBlock');
    document.body.scrollTop = mainBlock ? mainBlock.offsetTop : 0;

    API
      .getAlbum(this.props.params.albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_ALBUM,
          album
        })
      });
  },

  render () {
    let { year, albumId, photoId } = this.props.params;
    let backLink = [
      { title: `Обратно в ${year}`, link: `${year}` },
      { title: `Обратно к альбому`, link: `${year}/${albumId}` }
    ];
    let props = {
      album: this.props.album,
      photoId,
      handleImageLoad: (event) => (event.target)
    };

    return (
      <div>
        <SubNavigation base='gallery' list={backLink}/>
        <PhotoView { ...props } />
      </div>
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(PhotoContainer);