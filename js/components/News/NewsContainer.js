import { loaderUtil } from "../../utils";
import styled from 'styled-components';
let _ = require('lodash');
let React = require('react');
let moment = require('moment');
//import { ThreeBallsLoader } from 't0s-components';
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let SubNavigation = require('../SubNavigation/subNavigation');
import NewsView from './NewsView';
const { alt } = require('./../../composes/colors-scheme');

const API = require('../../api');

class ThreeBallsLoader extends React.Component {
  render() {
    return (<h1>Here will be ThreeBallsLoader</h1>);
  }
}

function getNews (year = moment().year()) {
  loaderUtil.start();
  store.dispatch({ type: TYPES.SET_NEWS_LOADER });
  API
    .getSectionItemsForYear('news', year)
    .then((news) => {
      store.dispatch({
        type: TYPES.GET_NEWS,
        news
      });
      loaderUtil
        .complete()
        .then(() => store.dispatch({ type: TYPES.UNSET_NEWS_LOADER }));
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

class NewsContainer extends React.Component {
  componentDidMount () {
    API
      .getAvailableYears('news')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_NEWS_YEARS,
          years
        })
      });
    getNews(this.props.match.params.year);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.year !== this.props.match.params.year) {
      getNews(this.props.match.params.year);
    }
  }

  static defaultProps () {
    return {
      isPreloader: true
    };
  }

  render() {
    let years = this.props.years;
    let news = this.props.news;
    let list = _.map(years, (year) => ({ title: year, link: year }));
    const isLoader = this.props.loader;

    return (
      <BlockWrapper>
        {isLoader
          ? (<LoaderWrapper><ThreeBallsLoader theme={alt}/></LoaderWrapper>) 
          : (<div><SubNavigation base='news' list={list}/><NewsView news={news}/></div>)
        }
      </BlockWrapper>
    );
  }
}

const mapStateToProps = ({ newsState }) => ({
  news: newsState.news,
  years: newsState.years,
  loader: newsState.loader
});

export default connect(mapStateToProps)(NewsContainer);
