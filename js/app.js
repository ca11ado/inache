let ReactDOM = require('react-dom');
let React = require('react');
let { Router, Route, browserHistory } = require('react-router');

let routes = require('./routes');

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
);
