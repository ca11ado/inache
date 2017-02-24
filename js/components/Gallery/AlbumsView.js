import styled from 'styled-components';
const _ = require('lodash');
const css = require('./AlbumsView.css');
const React = require('react');
const NavLink = require('../framework/NavLink.react/navlink');
const Smile = require('t0s-components').Smile;

const NothingWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const AlbumPreview = (props) => {

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

  const albums = _.map(props.albums, ({ photo, name, link }) => {
    let props = { key: name, name, photo, link };
    return <AlbumPreview { ...props } />;
  });

  const nothingToShow = (
    <NothingWrapper>
      <h2>За этот год нет ни одного альбома</h2>
      <Smile bold='4' baseSize='30' />
    </NothingWrapper>
  );

  return (
    <div className={css.albumsList}>
      { albums.length ? albums : nothingToShow }
    </div>
  );
};

module.exports = GalleryView;
