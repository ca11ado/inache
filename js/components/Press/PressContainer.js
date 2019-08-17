let _ = require('lodash');
let moment = require('moment');
let React = require('react');
let PressView = require('./PressView');

let api = require('../../api');

let { connect } = require('react-redux');
let store = require('../../store');
let TYPES = require('../../actions/action-types');

class Press extends React.Component {
  componentDidMount () {
    api
      .getPressItems()
      .then((items) => {
        console.log(items);
        store.dispatch({
          type: TYPES.GET_PRESS_ITEMS,
          pressItems: items
        });
      });
  }

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
}

const mapStateToProps = (store) => ({ pressItems: store.pressState.pressItems });

module.exports = connect(mapStateToProps)(Press);
