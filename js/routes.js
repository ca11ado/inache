let { Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let App = require('./components/App.react');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');
let Band = require('./components/band/band');
let Music = require('./components/Music/music');
let Video = require('./components/video/video');
let Photo = require('./components/photo/photo');
let Press = require('./components/press/press');

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
    <Route path="band" component={Band} />
    <Route path="music" component={Music} />
    <Route path="video" component={Video} />
    <Route path="gallery" component={Photo} />
    <Route path="press" component={Press} />
  </Route>
);