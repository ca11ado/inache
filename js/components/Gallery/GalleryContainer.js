let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let GalleryView = require('./GalleryView');

const API = require('../../stores/DataBaseMock');

let GalleryContainer = React.createClass({
  componentDidMount () {
    let year = Number(this.props.params.year) || moment().year();
    API
      .getSectionItemsForYear('gallery', year)
      .then((albums) => {
        store.dispatch({
          type: TYPES.GET_ALBUMS,
          albums
        });
      });
    API
      .getAvailableYears('gallery')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_ALBUMS_YEARS,
          years
        })
      })
  },

  render () {
    let albums = this.props.albums;
    let years = this.props.years;
    let list = _.map(years, (year) => ({ title: year, link: year }));

    return (
      <GalleryView albums={albums} list={list} />
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ albums: galleryState.albums, years: galleryState.years });

module.exports = connect(mapStateToProps)(GalleryContainer);