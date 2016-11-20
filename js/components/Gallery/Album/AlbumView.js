let _ = require('lodash');
let css = require('./AlbumView.css');
let React = require('react');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');
let NavLink = require('../../framework/NavLink.react/navlink');

let PhotoPreview = React.createClass({
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
});

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

  return (
    <MainBlock>
      <Header>Фото</Header>
      <SubNavigation base='gallery' list={props.backLink} />
      <Content>
        <div className={css.block}>
          {content}
        </div>
      </Content>
    </MainBlock>
  );
};

module.exports = AlbumView;