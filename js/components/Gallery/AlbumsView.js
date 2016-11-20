let _ = require('lodash');
let css = require('./AlbumsView.css');
let React = require('react');
let Header = require('../main-block/Header/header');
let SubNavigation = require('../sub-navigation/subNavigation');
let MainBlock = require('../main-block/mainBlock');
let Content = require('../main-block/content/content');
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

  return (
    <MainBlock>
      <Header>Фото</Header>
      <SubNavigation base='gallery' list={props.list} />
      <Content>
        <div className={css.albumsList}>
          { _.map(props.albums, ({ photo, name, link }) => {
            let props = { key: name, name, photo, link };
            return <AlbumPreview { ...props } />;
          })}
        </div>
      </Content>
    </MainBlock>
  );
};

module.exports = GalleryView;