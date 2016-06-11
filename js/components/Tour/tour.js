let css = require('./tour.css');
let React = require('react');
let moment = require('moment');
let NewsActions = require('../../actions/NewsActions');
let NewsStore = require('../../stores/NewsStore');
let SubNavigation = require('../sub-navigation/SubNavigation');

function getToursState() {
  return {
    tours: NewsStore.getTours(),
    years: NewsStore.getAvailableTourYears()
  };
}

let Tour = React.createClass({
  getInitialState () {
    let activeYear = Number(this.props.params.year) || moment().year();
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

  render () {
    let years = this.state.years;

    let base = 'tour';
    let list = _.map(years, (year) => {
      return { link: year, title: year };
    });

    return (
      <div>
        <div className={css.blockHeader}>
          Афиша
        </div>
        <div className={css.subHeader}>
          <SubNavigation base={base} list={list} />
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getToursState());
  }
});

module.exports = Tour;