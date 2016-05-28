let { Route, IndexRoute } = require('react-router');
let React = require('react');
let App = require('../TodoApp.react');

module.exports = (
  <Route path="/" component={App}>
  </Route>
);