const _ = require('lodash');
const moment = require('moment');
const React = require('react');
const css = require('./center-block-view.css');

const FORMAT = 'DD MMMM YYYY';

const CenterBlockView = (props) => {

  return (
    <div className={css.block}>
      <div className={css.header}>Последние новости:</div>
      {_.map(props.news, ({ date, header, text }) => (
        <div className={css.newsItem} key={date}>
          <div className={css.dateText}>{moment(date).format(FORMAT)}</div>
          <div className={css.newsText}>{text}</div>
        </div>
      ))}
    </div>
  );
};

module.exports = CenterBlockView;
