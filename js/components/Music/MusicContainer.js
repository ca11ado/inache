let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let MusicView = require('./MusicView');

const API = require('../../api');

function getMusic (year = moment().year()) {
  API
    .getSectionItems('music')
    .then((albums) => {
      store.dispatch({
        type: TYPES.GET_MUSIC_ALBUMS,
        albums
      });
    });
}

let MusicContainer = React.createClass({
  componentDidMount () {
    getMusic(this.props.params.year);
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
      getMusic(nextProps.params.year);
    }
  },

  render () {
    let albums = this.props.albums;
    let isShown = !this.props.params.albumId;

    return (
      <div>
        <MusicView isShown={isShown} albums={albums} />
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = ({ musicState }) => ({ albums: musicState.albums });

module.exports = connect(mapStateToProps)(MusicContainer);