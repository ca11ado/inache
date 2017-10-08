const _ = require('lodash');
const React = require('react');
const moment = require('moment');
const { connect } = require('react-redux');
const { Smile, ThreeBallsLoader } = require('t0s-components');
const css = require('./tours-container.css');
const store = require('../../store');
const TYPES = require('../../actions/action-types');
const SubNavigation = require('../SubNavigation/subNavigation');
const Legend = require('./Legend/LegendView');
const ToursView = require('./ToursView');
const { alt } = require('./../../composes/colors-scheme');
import { loaderUtil } from "../../utils";

const API = require('../../api');

function getTours (year = moment().year()) {

  loaderUtil.start();
  store.dispatch({ type: TYPES.SET_LOADER });

  API
    .getSectionItemsForYear('tours', year)
    .then((tours) => {
      store.dispatch({
        type: TYPES.GET_TOURS,
        tours
      });
      loaderUtil
        .complete()
        .then(() => store.dispatch({ type: TYPES.UNSET_LOADER }));
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
          { loader
            ? (<div className={css.loader}><ThreeBallsLoader theme={alt} /></div>)
            : Content
          }
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

