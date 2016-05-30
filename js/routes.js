let { Route, IndexRoute } = require('react-router');
let React = require('react');

let App = require('./components/App.react');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');

module.exports = (
  <Route path="/" component={App}>
    <Route path="news" component={News}/>
    <Route path="tour" component={Tour}/>
  </Route>
);