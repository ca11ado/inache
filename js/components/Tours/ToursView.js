let _ = require('lodash');
let moment = require('moment');
let css = require('./tours.css');
let React = require('react');
let NavLink = require('../framework/NavLink.react/navlink');

moment.locale('ru');

let TourItem = (props) => {
  const FORMAT = 'DD MMMM YYYY';
  
  let { date, text, header = '' } = props;
  let formattedDate = moment(date).format(FORMAT);
  
  return (
    <div className={css.tourItemWrap}>
      <a name={date}></a>
      <div className={css.date}>{formattedDate}</div>
      <div className={css.header}>{header}</div>
      <div className={css.text}>{text}</div>
    </div>
  );
};

let ToursView = (props) => {

  return (
    <div>
      { _.map(props.tours, ({ header, date, text }) => {
        let props = { header, date, text, key: date };
        return <TourItem { ...props } />;
      })}
    </div>
  );
};

module.exports = ToursView;