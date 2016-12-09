let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let SubNavigation = require('../SubNavigation/subNavigation');
let AlbumsView = require('./AlbumsView');

const API = require('../../api');

function getAlbumsAPI (year = moment().year()) {
  API
    .getSectionItemsForYear('gallery', year)
    .then((albums) => {
      store.dispatch({
        type: TYPES.GET_ALBUMS,
        albums
      });
    });
}

let AlbumsContainer = React.createClass({
  componentDidMount () {
    API
      .getAvailableYears('gallery')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_ALBUMS_YEARS,
          years
        })
      });
    getAlbumsAPI(this.props.params.year);
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
      getAlbumsAPI(nextProps.params.year);
    }
  },

  render () {
    let albums = this.props.albums;
    let years = this.props.years;
    let list = _.map(years, (year) => ({ title: year, link: year }));
    let isShown = !this.props.params.albumId;

    return (
      <div>
        <SubNavigation base='gallery' list={list} />
        <AlbumsView isShown={isShown} albums={albums} />
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ albums: galleryState.albums, years: galleryState.years });

module.exports = connect(mapStateToProps)(AlbumsContainer);