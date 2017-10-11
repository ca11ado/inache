import styled from 'styled-components';
import { loaderUtil } from "../../utils";
let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let MusicView = require('./MusicView');
const { ThreeBallsLoader } = require('t0s-components');
const { alt } = require('./../../composes/colors-scheme');

const API = require('../../api');

function getMusic (year = moment().year()) {
  loaderUtil.start();
  store.dispatch({ type: TYPES.SET_LOADER });

  API
    .getSectionItems('music')
    .then((albums) => {
      store.dispatch({
        type: TYPES.GET_MUSIC_ALBUMS,
        albums
      });
      loaderUtil
        .complete()
        .then(() => store.dispatch({ type: TYPES.UNSET_LOADER }));
    });
}

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 400px;
`;

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
    const isLoader = this.props.loader;
    const Content =
      <div>
        <MusicView isShown={isShown} albums={albums} />{this.props.children}
      </div>
    ;

    return (
      <BlockWrapper>
        {
          isLoader
          ? (<LoaderWrapper><ThreeBallsLoader theme={alt}/></LoaderWrapper>)
          : Content
        }
      </BlockWrapper>
    );
  }
});

const mapStateToProps = ({ musicState }) => ({
  albums: musicState.albums,
  loader: musicState.loader
});

module.exports = connect(mapStateToProps)(MusicContainer);