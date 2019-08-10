let _ = require('lodash');
let css = require('./AlbumView.css');
let React = require('react');
let NavLink = require('../../framework/NavLink.react/navlink');

class PhotoPreview extends React.Component {
  render () {
    let { src, link } = this.props.photo;

    return (
      <div className={css.photoPreview}>
        <NavLink to={link}>
          <img className={css.previewImg} src={src} />
        </NavLink>
      </div>
    );
  }
}

let AlbumView = (props) => {
  let photos = _.map(props.images, ({ original }, index) => {
    let extendProps = {
      key: `preview-image-${index}`,
      photo: {
        src: original,
        link: `/gallery/${props.year}/${props.albumId}/${index}`
      }
    };
    return <PhotoPreview { ...extendProps }/>;
  });

  let content = photos.length > 0 ? photos : <h1>Нет ни одной фотографии</h1>;

  if (!props.isShown) {
    return (<div></div>);
  }

  return (
    <div className={css.block}>
      {content}
    </div>
  );
};

module.exports = AlbumView;
