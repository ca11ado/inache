let _ = require('lodash');
let css = require('./AlbumsView.css');
let React = require('react');
let NavLink = require('../framework/NavLink.react/navlink');
let moment = require('moment');
moment.locale('ru');

let NewsItem = (props) => {
  const FORMAT = 'DD MMMM YYYY';
  let date = moment(props.date).format(FORMAT);
  let text = props.text;
  let header = props.header || '';

  return (
    <div className={css.newsItemWrap}>
      <div className={css.date}>{date}</div>
      <div className={css.header}>{header}</div>
      <div className={css.text}>{text}</div>
    </div>
  );
};

let NewsView = (props) => {

  return (
    <div>
      { _.map(props.news, ({ text, date }) => {
        let props = { key: date, date, text };
        return <NewsItem { ...props } />;
      })}
    </div>
  );
};

module.exports = NewsView;