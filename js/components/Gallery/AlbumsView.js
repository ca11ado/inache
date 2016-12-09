let _ = require('lodash');
let css = require('./AlbumsView.css');
let React = require('react');
let NavLink = require('../framework/NavLink.react/navlink');

let AlbumPreview = (props) => {

  return (
    <div className={css.albumWrapper}>
      <NavLink to={props.link}>
        <img className={css.album} src={props.photo} />
        <div className={css.albumName}>
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

let GalleryView = (props) => {

  if (!props.isShown) {
    return (<div></div>);
  }

  return (
    <div className={css.albumsList}>
      { _.map(props.albums, ({ photo, name, link }) => {
        let props = { key: name, name, photo, link };
        return <AlbumPreview { ...props } />;
      })}
    </div>
  );
};

module.exports = GalleryView;