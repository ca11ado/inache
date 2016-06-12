let _ = require('lodash');
let css = require('./LeftBlock.css');
let React = require('react');
let NewsStore = require('../../../stores/NewsStore');
let NewsActions = require('../../../actions/NewsActions');
let moment = require('moment');

moment.locale('ru');

let FORMAT = 'DD MMMM';

let TourItem = React.createClass({
  render () {
    let date = this.props.date;
    let text = this.props.text;
    let year = moment(date).year();
    let formattedDate = moment(date).format(FORMAT);
    let link = `/tour/${year}#${date}`;

    return (
      <div className={css.itemWrapper}>
        <div className={css.date}>{formattedDate}</div>
        <div className={css.text}>{text}</div>
        <a href={link}>link</a>
      </div>
    );
  }
});

function getToursState() {
  return {
    tours: NewsStore.getTours()
  };
}

let LeftBlock = React.createClass({
  getInitialState () {
    let count = 2;
    NewsActions.getFeatureTours(count);
    return {};
  },

  componentDidMount: function() {
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NewsStore.removeChangeListener(this._onChange);
  },

  render () {
    let tours = this.state.tours;
    let FeatureTours = _.map(tours, ({ header, date, text }, index) => {
      let props = {
        date,
        text,
        key: `homePage-tour-item-${index}`
      };
      return <TourItem { ...props } />;
    });

    return (
      <div>
        <div className={css.blockHeader}>Ближайшие концерты:</div>
        <div className={css.line}>
          <ul>
            <li>"Иначе" в электричестве</li>
            <li>"Иначе" в акустике</li>
            <li>Н. Подорольский в акустике</li>
          </ul>
        </div>
        <div>
          {FeatureTours}
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getToursState());
  }
});

module.exports = LeftBlock;
