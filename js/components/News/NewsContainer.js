let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let SubNavigation = require('../SubNavigation/subNavigation');
let NewsView = require('./NewsView');

const API = require('../../api');

function getNews (year = moment().year()) {
  API
    .getSectionItemsForYear('news', year)
    .then((news) => {
      store.dispatch({
        type: TYPES.GET_NEWS,
        news
      });
    });
}

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

    return (
      <div>
        <SubNavigation base='news' list={list} />
        <NewsView news={news} />
      </div>
    );
  }
});

const mapStateToProps = ({ newsState }) => ({ news: newsState.news, years: newsState.years });

module.exports = connect(mapStateToProps)(NewsContainer);