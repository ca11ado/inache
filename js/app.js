let ReactDOM = require('react-dom');
let React = require('react');

import { Provider } from 'react-redux';
import store from './store';
let router = require('./router');

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
