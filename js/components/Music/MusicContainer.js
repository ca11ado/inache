let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let Header = require('../main-block/Header/header');
let MainBlock = require('../main-block/mainBlock');
let Content = require('../main-block/content/content');
let MusicView = require('./MusicView');

const API = require('../../stores/DataBaseMock');

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

    return (
      <MainBlock>
        <Header>Музыка</Header>
        <Content>
          <MusicView albums={albums} />
        </Content>
      </MainBlock>
    );
  }
});

const mapStateToProps = ({ musicState }) => ({ albums: musicState.albums });

module.exports = connect(mapStateToProps)(MusicContainer);