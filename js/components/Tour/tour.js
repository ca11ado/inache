let css = require('./tour.css');
let React = require('react');
let moment = require('moment');
let NewsActions = require('../../actions/NewsActions');
let NewsStore = require('../../stores/NewsStore');
let SubNavigation = require('../sub-navigation/SubNavigation');
let TourItem = require('./tour-item/tourItem');

let defaultYear = moment().year();

function getToursState() {
  return {
    tours: NewsStore.getTours(),
    years: NewsStore.getAvailableTourYears()
  };
}

let Tour = React.createClass({
  getInitialState () {
    let activeYear = Number(this.props.params.year) || defaultYear;
    NewsActions.getToursForYear(activeYear);
    NewsActions.getAvailableYearsForTour();
    return {};
  },

  componentDidMount: function() {
    NewsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NewsStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function(nextProps) {
    let activeYear = _.get(nextProps, 'params.year', defaultYear);
    NewsActions.getToursForYear(activeYear);
  },

  render () {
    let years = this.state.years;
    let tours = this.state.tours;

    let base = 'tour';
    let list = _.map(years, (year) => {
      return { link: year, title: year };
    });

    let TourItems = _.map(tours, ({ header, date, text }, index) => {
      let props = {
        header,
        date,
        text,
        key: `tour-item-${index}`
      };
      return <TourItem { ...props } />;
    });

    return (
      <div>
        <div className={css.blockHeader}>
          Афиша
        </div>
        <div className={css.subHeader}>
          <SubNavigation base={base} list={list} />
        </div>
        <div className={css.content}>
          {TourItems}
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getToursState());
  }
});

module.exports = Tour;