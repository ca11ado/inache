let { Router, browserHistory, Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let MainLayout = require('./components/MainLayout');
let HomePage = require('./components/HomePage/homePage');
let News = require('./components/News/news');
let Tour = require('./components/Tour/tour');
let Band = require('./components/band/band');
let Video = require('./components/Video/Video');
let Gallery = require('./components/Gallery/AlbumsContainer');
let Press = require('./components/press/press-container');
let Photo = require('./components/Gallery/Photo/Photo');
let PageNotFound = require('./components/PageNotFound');

const currentYear = moment().year();
const newsIndexPath = `/news/${currentYear}`;
const toursIndexPath = `/tour/${currentYear}`;
const galleryIndexPath = `/gallery/${currentYear}`;

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={PageNotFound} />
      <Route path="press" component={Press} />
      <Route path="gallery">
        <IndexRedirect to={galleryIndexPath} />
        <Route path=":year" component={Gallery} />
        <Route path=":year/:albumId" component={PageNotFound} />
      </Route>
    </Route>
  </Router>
);