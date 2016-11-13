let css = require('./press.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/content/content');

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
    let pressHeader = _.map(pressItems, ({ date, header }, index) => {
      return (<li key={`press-${index}`}>{header}</li>);
    });

    return (
      <MainBlock>
        <Header>Пресса</Header>
        <Content>
          <p>2015</p>
          Заголовок статьи - автор, ресурс

          <h2>Trying redux</h2>
          <ul>
            {pressHeader}
          </ul>
        </Content>
      </MainBlock>
    );
  }
});

const mapStateToProps = (store) => ({ pressItems: store.pressState.pressItems });

module.exports = connect(mapStateToProps)(Press);