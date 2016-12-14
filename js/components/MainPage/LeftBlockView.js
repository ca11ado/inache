const _ = require('lodash');
const moment = require('moment');
const React = require('react');
const css = require('./left-block-view.css');

const FORMAT = 'DD.MM';

const LeftBlockView = (props) => {

  return (
    <div className={css.block}>
      <div className={css.header}>Ближайшие концерты:</div>
      {_.map(props.tours, ({ date, fullDescription }) => (
        <div className={css.newsItem} key={date}>
          <div className={css.dateText}>{moment(date).format(FORMAT)}</div>
          <div className={css.newsText}>{fullDescription}</div>
        </div>
      ))}
    </div>
  );
};

module.exports = LeftBlockView;
