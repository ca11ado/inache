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
const { Smile, Loader } = require('t0s-components');
const MIN_LOADER_TIME = 700;

const API = require('../../api');

const minLoaderTime = () =>
  new Promise(resolve => setTimeout(() => resolve(), MIN_LOADER_TIME));

function getTours (year = moment().year()) {

  const canHideLoader = minLoaderTime();
  store.dispatch({ type: TYPES.SET_LOADER });

  API
    .getSectionItemsForYear('tours', year)
    .then((tours) => {
      store.dispatch({
        type: TYPES.GET_TOURS,
        tours
      });
      canHideLoader.then(() => store.dispatch({ type: TYPES.UNSET_LOADER }));
    });
}

const ToursContainer = React.createClass({
  componentDidMount () {
    API
      .getAvailableYears('tours')
      .then((years) => {
        store.dispatch({
          type: TYPES.GET_TOURS_YEARS,
          years
        });
      });
    getTours(this.props.params.year);
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.year !== this.props.params.year) {
      getTours(nextProps.params.year);
    }
  },

  render () {
    const { tours, years, location, loader = true } = this.props;
    const list = _.map(years, (year) => ({ link: year, title: year }));
    const hash = (location.hash && Number(location.hash.substring(1)))|| false;

    const sortedTours = _.orderBy(tours, ['date'], ['desc']);


    const Content = sortedTours.length > 0
      ? (<ToursView highlightedId={hash} tours={sortedTours} />)
      : (
        <div className={css.emptyToursPage}>
          <h2>Нет записей за этот год</h2>
          <Smile bold='4' baseSize='30' />
        </div>
        );

    return (
      <div>
        <SubNavigation base='tour' list={list} />
        <Legend/>
        <div className={css.block}>
          { loader ? (<div className={css.loader}><Loader /></div>) : Content }
        </div>
      </div>
    );
  }
});

const mapStateToProps = ({ toursState }) => ({
  tours: toursState.tours,
  years: toursState.years,
  loader: toursState.loader
});

module.exports = connect(mapStateToProps)(ToursContainer);

