let _ = require('lodash');
let css = require('./news.css');
let React = require('react');
let moment = require('moment');
let NavLink = require('../framework/NavLink.react/navlink');
let NewsStore = require('../../stores/NewsStore');
let NewsActions = require('../../actions/NewsActions');
let SubNavigation = require('../sub-navigation/SubNavigation');
let NewsItem = require('./news-item/NewsItem.js');

function getNewsState() {
  return {
    news: NewsStore.getNews(),
    years: NewsStore.getAvailableYears()
  };
}

let News = React.createClass({
  /**
   * Отсылаем запрос к БДа, чтобы получить новости
   * @returns {{}}
   */
  getInitialState () {
    let activeYear = Number(this.props.params.year) || moment().year();
    NewsActions.getNewsForYear(activeYear);
    NewsActions.getAvailableYears();
    return {};
  },

  getDefaultProps () {
    return {
      isPreloader: true
    };
  },

  componentDidMount: function() {
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NewsStore.removeChangeListener(this._onChange);
  },

  componentWillUpdate: function () {
  },

  componentWillReceiveProps: function(nextProps, oldProps) {
    let currentYear = moment().year();
    let activeYear = _.get(nextProps, 'params.year', currentYear);

    NewsActions.getNewsForYear(activeYear);
  },

  render () {
    let years = this.state.years;
    let news = this.state.news;

    let showActiveYearNews = _.chain(news)
      .map((item, index) => {
        let key = `activeYearNews-${index}`;
        let text = _.get(item, 'text');
        let date = _.get(item, 'date');
        let props = { key, text, date };
        return <NewsItem { ...props } />;
      })
      .value();

    let list = _.map(years, (year) => {
      return { link: year, title: year };
    });
    let base = 'news';

    return (
      <div className={css.blockWrapper}>
        <div className={css.header}>
          Новости
        </div>
        <div className={css.subHeader}>
          <SubNavigation base={base} list={list} />
        </div>
        <div className={css.content}>
          {showActiveYearNews}
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getNewsState());
  },

  updateNewsItems (e) {
    let activeYear = Number(e.currentTarget.dataset.year);
    NewsActions.getNewsForYear(activeYear);
  }
});

module.exports = News;
