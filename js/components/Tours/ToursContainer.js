let _ = require('lodash');
let React = require('react');
let moment = require('moment');
let store = require('../../store');
let { connect } = require('react-redux');
let TYPES = require('../../actions/action-types');
let Header = require('../main-block/Header/header');
let SubNavigation = require('../sub-navigation/subNavigation');
let MainBlock = require('../main-block/mainBlock');
let Content = require('../main-block/content/content');
let ToursView = require('./ToursView');

const API = require('../../stores/DataBaseMock');

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

let ToursContainer = React.createClass({
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
    let { tours, years } = this.props;
    let list = _.map(years, (year) => {
      return { link: year, title: year };
    });

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base='tour' list={list} />
        <Content>
          <ToursView tours={tours} />
        </Content>
      </MainBlock>
    );
  }
});

const mapStateToProps = ({ toursState }) => ({ tours: toursState.tours, years: toursState.years });

module.exports = connect(mapStateToProps)(ToursContainer);