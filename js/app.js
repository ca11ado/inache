const ReactDOM = require('react-dom');
const React = require('react');

const { Provider } = require('react-redux');
const store = require('./store');
const router = require('./router');

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  /* global document:true */
  document.getElementById('app')
);
