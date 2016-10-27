let _ = require('lodash');
let css = require('./Album.css');
let React = require('react');
let moment = require('moment');
let Header = require('../../main-block/Header/header');
let SubNavigation = require('../../sub-navigation/subNavigation');
let MainBlock = require('../../main-block/mainBlock');
let Content = require('../../main-block/content/content');

let Gallery = require('react-image-gallery').default;

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
      { original: 'http://lorempixel.com/1000/600/nature/1/' },
      { original: 'http://lorempixel.com/1000/600/nature/2/' },
      { original: 'http://lorempixel.com/1000/600/nature/3/' }
    ];

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='gallery' list={backLink}/>
        <Content>
          <div>
            <h2>Here will be album's photos</h2>
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

module.exports = Album;