import {loaderUtil} from "../../utils";
import styled from 'styled-components';
let _ = require('lodash');
let React = require('react');
let moment = require('moment');
const { ThreeBallsLoader } = require('t0s-components');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let SubNavigation = require('../SubNavigation/subNavigation');
let NewsView = require('./NewsView');

const API = require('../../api');

function getNews (year = moment().year()) {
  loaderUtil.start();
  store.dispatch({ type: TYPES.SET_LOADER });
  API
    .getSectionItemsForYear('news', year)
    .then((news) => {
      store.dispatch({
        type: TYPES.GET_NEWS,
        news
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

let NewsContainer = React.createClass({
  componentDidMount () {
    API
      .getAvailableYears('news')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_NEWS_YEARS,
          years
        })
      });
    getNews(this.props.params.year);
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
      getNews(nextProps.params.year);
    }
  },

  getDefaultProps () {
    return {
      isPreloader: true
    };
  },

  render () {
    let years = this.props.years;
    let news = this.props.news;
    let list = _.map(years, (year) => ({ title: year, link: year }));
    const isLoader = this.props.loader;

    return (
      <div>
        {isLoader
          ? (<LoaderWrapper><ThreeBallsLoader/></LoaderWrapper>)
          : (<div><SubNavigation base='news' list={list}/><NewsView news={news}/></div>)
        }
      </div>
    );
  }
});

const mapStateToProps = ({ newsState }) => ({
  news: newsState.news,
  years: newsState.years,
  loader: newsState.loader
});

module.exports = connect(mapStateToProps)(NewsContainer);

