let ReactDOM = require('react-dom');
let React = require('react');
let { Router, Route, browserHistory } = require('react-router');

var TodoApp = require('./components/TodoApp.react');
let routes = require('./components/_routes');

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('todoapp')
);
