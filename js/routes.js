let { Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let App = require('./components/App.react');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');

let TestComponent = require('./components/TestComponent');
let currentYear = moment().year();
let newsIndexPath = `/news/${currentYear}`;
let toursIndexPath = `/tour/${currentYear}`;

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="news" component={News}>
      <IndexRedirect to={newsIndexPath} />
      <Route path="/news/:year" component={News} />
    </Route>
    <Route path="tour" component={Tour}>
      <IndexRedirect to={toursIndexPath} />
      <Route path="/tour/:year" component={Tour} />
    </Route>
  </Route>
);