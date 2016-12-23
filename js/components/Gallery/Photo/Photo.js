const _ = require('lodash');
const css = require('./Photo.css');
const React = require('react');
const SubNavigation = require('../../SubNavigation/subNavigation');

const { connect } = require('react-redux');
const TYPES = require('../../../actions/action-types');
const store = require('../../../store');
const API = require('../../../api');

const Gallery = require('react-image-gallery').default;

require('style!css!sass!react-image-gallery/styles/scss/image-gallery.scss');

const PhotoView = (props) => {
  const photos = _.get(props.album, 'photos', []);
  const photoNumber = Number(props.photoId);
  const startIndex = photoNumber > photos.length ? 0 : photoNumber;

  const GalleryProps = {
    items: photos,
    startIndex,
    slideInterval: 2000,
    onImageLoad: props.handleImageLoad,
    showIndex: true
  };
  const Gall = photos.length > 0
    ? React.createElement(Gallery, GalleryProps)
    : '';

  return (
    <div>
      {Gall}
    </div>
  );
};


const PhotoContainer = React.createClass({

  componentDidMount () {
    const mainBlock = document.getElementById('mainBlock');
		const windowHeight = document.documentElement.clientHeight;
		mainBlock.style.height = windowHeight + 'px';

		mainBlock.scrollIntoView(true);
		setTimeout(() => {
		}, 0);

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
    const { year, albumId, photoId } = this.props.params;
    const backLink = [
      { title: `Обратно в ${year}`, link: `${year}` },
      { title: `Обратно к альбому`, link: `${year}/${albumId}` }
    ];
    const props = {
      album: this.props.album,
      photoId,
      handleImageLoad: (event) => (event.target)
    };

    return (
      <div className={css.block}>
        <SubNavigation base='gallery' list={backLink}/>
        <PhotoView { ...props } />
      </div>
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(PhotoContainer);
