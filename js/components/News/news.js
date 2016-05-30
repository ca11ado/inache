let _ = require('lodash');
let css = require('./news.css');
let React = require('react');
let moment = require('moment');

let NewsItem = require('./news-item/NewsItem.js');

let newsFromDB = require('./dataForPage');
let activeYear = moment().year();

let showYears = _.chain(newsFromDB)
  .map(({ date }) => moment(date).year())
  .uniq()
  .map((year, index) => {
    let key = `news-year-${index}`;
    let className = css.years;
    return React.createElement('span', { key, className }, year);
  })
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

let News = React.createClass({
  render () {
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
