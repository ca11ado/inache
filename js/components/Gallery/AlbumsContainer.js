import { loaderUtil } from "../../utils";
import styled from 'styled-components';
let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let SubNavigation = require('../SubNavigation/subNavigation');
let AlbumsView = require('./AlbumsView');
const { alt } = require('./../../composes/colors-scheme');
const { ThreeBallsLoader } = require('t0s-components');

const API = require('../../api');

function getAlbumsAPI (year = moment().year()) {
  loaderUtil.start();
  store.dispatch({ type: TYPES.SET_LOADER });
  API
    .getSectionItemsForYear('gallery', year)
    .then((albums) => {
      store.dispatch({
        type: TYPES.GET_ALBUMS,
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
    const { loader:isLoader, albums, years } = this.props;
    let list = _.map(years, (year) => ({ title: year, link: year }));
    let isShown = !this.props.params.albumId;

    return (
      <BlockWrapper>
        {
          isLoader
            ? <LoaderWrapper><ThreeBallsLoader theme={alt}/></LoaderWrapper>
            : (
              <div>
                <SubNavigation base='gallery' list={list} />
                <AlbumsView isShown={isShown} albums={albums} />
                {this.props.children}
              </div>
            )
        }
      </BlockWrapper>
    );
  }
});

const mapStateToProps = ({ galleryState }) => ({
  albums: galleryState.albums,
  years: galleryState.years,
  loader: galleryState.loader
});

module.exports = connect(mapStateToProps)(AlbumsContainer);