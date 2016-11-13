let _ = require('lodash');
let moment = require('moment');
let css = require('./press.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/content/content');
let PressView = require('./press-view');

let api = require('../../stores/DataBaseMock');

import { connect } from 'react-redux';
import store from '../../store';
import * as types from '../../actions/action-types';

let Press = React.createClass({
  componentDidMount () {
    api
      .getPressItems()
      .then((items) => {
        store.dispatch({
          type: types.GET_PRESS_ITEMS,
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