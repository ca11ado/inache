let css = require('./tour.css');
let React = require('react');
let moment = require('moment');
let NewsActions = require('../../actions/NewsActions');
let NewsStore = require('../../stores/NewsStore');
let SubNavigation = require('../sub-navigation/SubNavigation');
let TourItem = require('./tour-item/tourItem');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/Content/content');

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
      <MainBlock>
        <Header>Афиша</Header>
        <SubNavigation base={base} list={list} />
        <Content>{TourItems}</Content>
      </MainBlock>
    );
  },

  _onChange: function() {
    this.setState(getToursState());
  }
});

module.exports = Tour;