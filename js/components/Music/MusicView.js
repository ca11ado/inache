let _ = require('lodash');
let css = require('./music.css');
let React = require('react');
let NavLink = require('../framework/NavLink.react/navlink');

let AlbumPreview = (props) => {
  let { src, name, urlName } = props;

  return (
    <div className={css.coverWrap}>
      <NavLink to={`/music/${urlName}`}>
        <img className={css.albumCover} src={src} />
        <div className={css.description}>{name}</div>
      </NavLink>
    </div>
  );
};

let MusicView = (props) => {

  return (
    <div className={css.albumsWrapper}>
      { _.map(props.albums, ({ photo: src, name, urlName }) => {
        let props = { key: name, name, src, urlName };
        return <AlbumPreview { ...props } />;
      })}
    </div>
  );
};

module.exports = MusicView;