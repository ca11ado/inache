const _ = require('lodash');
const css = require('./Photo.css');
const React = require('react');
const SubNavigation = require('../../SubNavigation/subNavigation');
const Gallery = require('./Lightbox');

const { connect } = require('react-redux');
const TYPES = require('../../../actions/action-types');
const store = require('../../../store');
const API = require('../../../api');

class PhotoView extends React.Component {
	render () {
		const photos = this.props.album.photos || [];

		return (
			<div>
				<Gallery images={photos.map(({ original }) => ({
					src: original
				}))} />
			</div>
		);
	}
}

class PhotoContainer extends React.Component {

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
  }

  render () {
    const { year, albumId, photoId } = this.props.params;
    const backLink = [
      { title: `Вернуться к альбомам`, link: `${year}` }
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
}

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(PhotoContainer);
