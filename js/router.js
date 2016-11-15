let { Router, browserHistory, Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let App = require('./components/App.react');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');
let Band = require('./components/band/band');
let Video = require('./components/Video/Video');
let Gallery = require('./components/Gallery/GalleryContainer');
let Press = require('./components/press/press-container');
let Photo = require('./components/Gallery/Photo/Photo');

let TestComponent = require('./components/TestComponent');
let currentYear = moment().year();
let newsIndexPath = `/news/${currentYear}`;
let toursIndexPath = `/tour/${currentYear}`;
let galleryIndexPath = `/gallery/${currentYear}`;

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="press" component={Press}/>
      <Route path="gallery" component={Gallery}/>
    </Route>
  </Router>
);