const _ = require('lodash');
const React = require('react');
const css = require('./tours-container.css');
const moment = require('moment');
const store = require('../../store');
const { connect } = require('react-redux');
const TYPES = require('../../actions/action-types');
const SubNavigation = require('../SubNavigation/subNavigation');
const Legend = require('./Legend/LegendView');
const ToursView = require('./ToursView');

const API = require('../../api');

function getToursAPI (year = moment().year()) {
  API
    .getSectionItemsForYear('tours', year)
    .then((tours) => {
      store.dispatch({
        type: TYPES.GET_TOURS,
        tours
      });
    });
}

const ToursContainer = React.createClass({
  componentDidMount () {
    API
      .getAvailableYears('tour')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_TOURS_YEARS,
          years
        })
      });
    getToursAPI(this.props.params.year);
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
      getToursAPI(nextProps.params.year);
    }
  },

  render () {
    const { tours, years } = this.props;
    const list = _.map(years, (year) => ({ link: year, title: year }));

    const sortedTours = _.orderBy(tours, ['date'], ['desc']);

    return (
      <div>
        <SubNavigation base='tour' list={list} />
        <Legend/>
        <div className={css.block}>
          <ToursView tours={sortedTours} />
        </div>
      </div>
    );
  }
});

const mapStateToProps = ({ toursState }) => ({ tours: toursState.tours, years: toursState.years });

module.exports = connect(mapStateToProps)(ToursContainer);