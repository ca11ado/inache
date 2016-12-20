const _ = require('lodash');
const moment = require('moment');
const React = require('react');
const css = require('./left-block-view.css');

const Aqoustics = require('../../framework/Pictos/Aqoustics');
const Electricity = require('../../framework/Pictos/Electricity');
const Solo = require('../../framework/Pictos/Solo');
const PICTOS = [<Solo/>, <Aqoustics/>, <Electricity/>];

const FORMAT = 'DD.MM';

const LeftBlockView = (props) => {

  return (
    <div className={css.block}>
      <div className={css.header}>Ближайшие концерты:</div>
      <div>
        <ul className={css.pictosUl}>
          <li className={css.pictosLi}>
            <Electricity/>
            <span className={css.pictoTitle}>&laquo;Иначе&raquo; в&nbsp;электричестве</span>
          </li>
          <li className={css.pictosLi}>
            <Aqoustics/>
            <span className={css.pictoTitle}>&laquo;Иначе&raquo; в&nbsp;акустике</span>
          </li>
          <li className={css.pictosLi}>
            <Solo/>
            <span className={css.pictoTitle}>Н.&nbsp;Подорольский в&nbsp;акустике</span>
          </li>
        </ul>
      </div>
      {_.map(props.tours, ({ date, fullDescription, pictoId = 0 }) => (
        <div className={css.newsItem} key={date}>
          <div className={css.date}>
            {PICTOS[pictoId]}
            <div className={css.dateText}>{moment(date).format(FORMAT)}</div>
          </div>
          <div className={css.newsDescription}>{fullDescription}</div>
        </div>
      ))}
    </div>
  );
};

module.exports = LeftBlockView;
