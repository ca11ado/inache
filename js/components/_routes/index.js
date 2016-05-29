let { Route, IndexRoute } = require('react-router');
let React = require('react');

let App = require('../App.react');
let News = require('../News/news');
let Tour = require('../Tour/tour');

module.exports = (
  <Route path="/" component={App}>
    <Route path="news" component={News}/>
    <Route path="tour" component={Tour}/>
  </Route>
);