let _ = require('lodash');
let React = require('react');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let AlbumView = require('./AlbumView');

const API = require('../../../stores/DataBaseMock');

let AlbumContainer = React.createClass({
  componentDidMount () {
    API
      .getAlbum(this.props.params.albumId)
      .then((album) => {
        store.dispatch({
          type: TYPES.GET_ALBUM,
          album
        })
      })
  },

  componentWillReceiveProps: function (nextProps) {
  },

  render () {
    let year = this.props.params.year;
    let albumId = this.props.params.albumId;
    let backLink = [{ title: `Back to ${year}`, link: year }];
    let images = _.get(this.props.album, 'photos', []);

    let props = {
      backLink,
      images,
      albumId,
      year
    };

    return (
      <AlbumView { ...props } />
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(AlbumContainer);