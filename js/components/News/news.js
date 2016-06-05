let _ = require('lodash');
let css = require('./news.css');
let React = require('react');
let moment = require('moment');
let NavLink = require('../framework/NavLink.react/navlink');
let NewsStore = require('../../stores/NewsStore');
let NewsActions = require('../../actions/NewsActions');
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

  render () {
    let years = this.state.years;
    let news = this.state.news;

    let showYears = _.chain(years)
      .map((year, index) => {
        let className = css.years;
        let key = `news-year-${index}`;
        let to = `/news/${year}`;
        let props = { key, to, className, 'data-year': year };
        return (
          <NavLink { ...props } onClick={this.updateNewsItems}>
            {year}
          </NavLink>
        );
      })
      .value();

    let showActiveYearNews = _.chain(news)
      .map((item, index) => {
        let key = `activeYearNews-${index}`;
        let text = _.get(item, 'text');
        let date = _.get(item, 'date');
        let props = { key, text, date };
        return <NewsItem { ...props } />;
      })
      .value();

    return (
      <div className={css.blockWrapper}>
        <div className={css.header}>
          Новости
        </div>
        <div className={css.subHeader}>
          {showYears}
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
