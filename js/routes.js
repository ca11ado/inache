let { Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');

let App = require('./components/App.react');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');

let TestComponent = require('./components/TestComponent');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="news" component={News}>
      <IndexRedirect to="/news/2016" />
      <Route path="/news/:year" component={News} />
    </Route>
    <Route path="tour" component={Tour}/>
  </Route>
);