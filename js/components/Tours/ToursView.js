const _ = require('lodash');
const moment = require('moment');
const shortid = require('shortid');
const css = require('./tours-view.css');
const React = require('react');
const NavLink = require('../framework/NavLink.react/navlink');
const Solo = require('../framework/Pictos/Solo');
const Aqoustics = require('../framework/Pictos/Aqoustics');
const Electricity = require('../framework/Pictos/Electricity');

moment.locale('ru');

const pictos = [<Solo/>, <Aqoustics/>, <Electricity/>];

const TourItem = (props) => {
  const FORMAT = 'DD.MM'; // DD MMMM YYYY

  const { date, fullDescription, pictoId, place, links = [] } = props;
  const formattedDate = moment(date).format(FORMAT);
  const pictoElement = pictos[pictoId];

  const PICTOS_ALT = [
    'сольное выступление Н. Подорольского',
    'группа ИНАЧЕ в акустике',
    'группа ИНАЧЕ в электричестве'
  ];

  const linksElement = _.map(links, (link) => (<a key={shortid.generate()} href={link.url}>{link.title}</a>));

  return (
    <div className={css.tourItemWrap}>
      <a name={date}></a>
      <span title={PICTOS_ALT[pictoId]}>{pictoElement}</span>
      <span className={`${css.column} ${css.date}`}>{formattedDate}</span>
      <span className={css.column}>{place}</span>
      <span className={`${css.column} ${css.text}`}>{fullDescription}</span>
      <span className={css.column}>{linksElement}</span>
    </div>
  );
};

const ToursView = (props) => {

  return (
    <div>
      {_.map(props.tours, (tour) => <TourItem key={tour.date} { ...tour } />)}
    </div>
  );
};

module.exports = ToursView;