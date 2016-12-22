const _ = require('lodash');
const css = require('./music.css');
const React = require('react');
const NavLink = require('../framework/NavLink.react/navlink');

function openModal () {
	console.log('Open modal window')
}

const AlbumPreview = (props) => {
  const { src, name, urlName } = props;

  return (
    <div className={css.coverWrap}>
      <NavLink to={`/music/${urlName}`}>
        <img onClick={openModal} className={css.albumCover} src={src} />
        <div className={css.description}>{name}</div>
      </NavLink>
    </div>
  );
};

const MusicView = (props) => {

  if (!props.isShown) return (<div></div>);

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
