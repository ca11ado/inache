let _ = require('lodash');
let React = require('react');
let store = require('../../../store');
let { connect } = require('react-redux');
let TYPES = require('../../../actions/action-types');
let SubNavigation = require('../../SubNavigation/subNavigation');
let AlbumView = require('./AlbumView');

const API = require('../../../api');

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
    let backLink = [{ title: `Обратно к ${year}`, link: year }];
    let images = _.get(this.props.album, 'photos', []);

    let props = {
      images,
      albumId,
      year
    };

    let isShown = !this.props.params.photoId;

    return (
      <div>
        <SubNavigation base='gallery' list={backLink} />
        <AlbumView isShown={isShown} { ...props } />
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({ album: galleryState.album });

module.exports = connect(mapStateToProps)(AlbumContainer);