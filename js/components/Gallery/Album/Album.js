let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');

let Album = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount: function () {
  },

  componentWillUnmount: function () {
  },

  componentWillReceiveProps: function (nextProps) {
  },

  render () {
    let year = this.props.params.year;
    let backLink = [{ title: `Back to ${year}`, link: year }];
    const images = [
      { original: '/img/albums/4mEhutW27Dw.jpg' },
      { original: '/img/albums/5vGsKR_fk0c.jpg' },
      { original: '/img/albums/6uvv0G7sS9s.jpg' },
      { original: '/img/albums/4mEhutW27Dw.jpg' },
      { original: '/img/albums/5vGsKR_fk0c.jpg' },
      { original: '/img/albums/6uvv0G7sS9s.jpg' },
      { original: '/img/albums/4mEhutW27Dw.jpg' },
      { original: '/img/albums/5vGsKR_fk0c.jpg' },
      { original: '/img/albums/6uvv0G7sS9s.jpg' },
      { original: '/img/albums/4mEhutW27Dw.jpg' }
    ];

    let imagesPreview = _.map(images, (image, index) => {
      return React.createElement('img', {
        key: `preview-image-${index}`,
        src: image.original,
        width: '15%',
        height: '15%'
      });
    });

    return (
      <MainBlock>
        <Header>Фотографии в альбоме</Header>
        <SubNavigation base='gallery' list={backLink}/>
        <Content>
          <div className={css.block}>{imagesPreview}</div>
        </Content>
      </MainBlock>
    );
  }
});

module.exports = Album;