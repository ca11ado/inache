let _ = require('lodash');
let css = require('./Gallery.css');
let React = require('react');
let moment = require('moment');
let Header = require('../main-block/Header/header');
let SubNavigation = require('../sub-navigation/subNavigation');
let MainBlock = require('../main-block/mainBlock');
let Content = require('../main-block/content/content');
let GalleryActions = require('../../actions/GalleryActions');
let GalleryStore = require('../../stores/GalleryStore');
let AlbumCover = require('./AlbumCover/AlbumCover');

function getNewsState() {
  return {
    albums: GalleryStore.getAlbums(),
    years: GalleryStore.getAvailableYears()
  };
}

let Gallery = React.createClass({
  getInitialState () {
    let activeYear = Number(this.props.params.year) || moment().year();
    GalleryActions.getAvailableYears();
    GalleryActions.getAlbumsForYear(activeYear);
    return {};
  },

  componentDidMount: function() {
    GalleryStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GalleryStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function(nextProps) {
    let currentYear = moment().year();
    let activeYear = _.get(nextProps, 'params.year', currentYear);

    GalleryActions.getAlbumsForYear(activeYear);
  },
  
  render () {
    let years = this.state.years;
    let list = _.map(years, (year) => ({ title: year, link: year }));

    let albums = _.map(this.state.albums, (album, index) => {
      let key = `album-${index}`;
      let props = {
        key,
        photo: album.photo,
        name: album.name,
        link: album.link
      };
      return <AlbumCover { ...props } />;
    });

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='gallery' list={list} />
        <Content>
          <div className={css.albumsList}>
            {albums}
          </div>
        </Content>
      </MainBlock>
    );
  },

  _onChange: function() {
    this.setState(getNewsState());
  }
});

module.exports = Gallery;