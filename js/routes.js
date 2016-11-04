let { Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let App = require('./components/App.react');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');
let Band = require('./components/band/band');
let Music = require('./components/Music/music');
let Video = require('./components/Video/Video');
let Gallery = require('./components/Gallery/Gallery');
let Album = require('./components/Gallery/Album/Album');
let Press = require('./components/press/press');
let Photo = require('./components/Gallery/Photo/Photo');

let TestComponent = require('./components/TestComponent');
let currentYear = moment().year();
let newsIndexPath = `/news/${currentYear}`;
let toursIndexPath = `/tour/${currentYear}`;
let galleryIndexPath = `/gallery/${currentYear}`;

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/news" component={News}>
      <IndexRedirect to={newsIndexPath} />
      <Route path="/news/:year" component={News} />
    </Route>
    <Route path="/tour" component={Tour}>
      <IndexRedirect to={toursIndexPath} />
      <Route path="/tour/:year" component={Tour} />
    </Route>
    <Route path="/band" component={Band} />
    <Route path="/music" component={Music} />
    <Route path="/video" component={Video} />
    <Route path="/gallery" component={Gallery}>
      <IndexRedirect to={galleryIndexPath} />
      <Route path="/gallery/:year" component={Gallery} />
    </Route>
    <Route path="/gallery/:year/:album" component={Album} />
    <Route path="/gallery/:year/:album/:photo" component={Photo} />
    <Route path="/press" component={Press} />
  </Route>
);