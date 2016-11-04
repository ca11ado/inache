let _ = require('lodash');
let css = require('./Photo.css');
let React = require('react');
let moment = require('moment');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');

let Gallery = require('react-image-gallery').default;

require('style!css!sass!react-image-gallery/styles/scss/image-gallery.scss');

let Photo = React.createClass({
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
      { original: '/img/albums/4mEhutW27Dw.jpg' }
    ];

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='gallery' list={backLink}/>
        <Content>
          <div>
            <Gallery
              items={images}
              slideInterval={2000}
              onImageLoad={this.handleImageLoad}/>
          </div>
        </Content>
      </MainBlock>
    );
  },

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
});

module.exports = Photo;