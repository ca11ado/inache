let _ = require('lodash');
let css = require('./news.css');
let React = require('react');
let moment = require('moment');
let NavLink = require('../framework/NavLink.react/navlink');
let NewsStore = require('../../stores/NewsStore');
let newsFromDB = require('./dataForPage');
let NewsItem = require('./news-item/NewsItem.js');

function getNewsState() {
  let activeYear = Number(this.props.params.year) || moment().year();

  return {
    news: NewsStore.getNewsForYear(activeYear)
  };
}

let News = React.createClass({
  getInitialState () {
    return getNewsState();  
  },

  render () {
    let activeYear = Number(this.props.params.year) || moment().year();

    let showYears = _.chain(this.props.news)
      .map(({ date }) => moment(date).year())
      .uniq()
      .map((year, index) => {
        let className = css.years;
        let key = `news-year-${index}`;
        let to = `/news/${year}`;
        let props = { key, to, className };
        return (
          <NavLink { ...props }>
            {year}
          </NavLink>
        );
      })
      .reverse()
      .value();

    let showActiveYearNews = _.chain(newsFromDB)
      .filter(({ date }) => moment(date).year() === activeYear)
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
  }
});

module.exports = News;
