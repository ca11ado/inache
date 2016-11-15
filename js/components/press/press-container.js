let _ = require('lodash');
let moment = require('moment');
let React = require('react');
let PressView = require('./press-view');

let api = require('../../stores/DataBaseMock');

let { connect } = require('react-redux');
let store = require('../../store');
let TYPES = require('../../actions/action-types');

let Press = React.createClass({
  componentDidMount () {
    api
      .getPressItems()
      .then((items) => {
        store.dispatch({
          type: TYPES.GET_PRESS_ITEMS,
          pressItems: items
        });
      });
  },

  render () {
    let pressItems = this.props.pressItems;
    let items = _.reverse(_.chain(pressItems)
      .groupBy(({ date}) => moment(date).year())
      .map((presses, year) => ({ year, presses }))
      .value());

    return (
      <PressView items={items} />
    );
  }
});

const mapStateToProps = (store) => ({ pressItems: store.pressState.pressItems });

module.exports = connect(mapStateToProps)(Press);