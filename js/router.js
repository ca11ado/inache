let { Router, browserHistory, Route, IndexRoute, IndexRedirect } = require('react-router');
let React = require('react');
let moment = require('moment');

let MainLayout = require('./components/MainLayout');
let News = require('./components/News/NewsContainer');
let Tours = require('./components/Tours/ToursContainer');
let Band = require('./components/Band/BandContainer');
let Video = require('./components/Video/VideoContainer');
let Albums = require('./components/Gallery/AlbumsContainer');
let Album = require('./components/Gallery/Album/AlbumContainer');
let Press = require('./components/press/press-container');
let Photo = require('./components/Gallery/Photo/Photo');
let PageNotFound = require('./components/PageNotFound');
let Music = require('./components/Music/MusicContainer');
let MusicAlbum = require('./components/Music/Album/AlbumContainer');

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
        <Route path=":year" component={Albums} />
        <Route path=":year/:albumId" component={Album} />
        <Route path=":year/:albumId/:photoId" component={Photo} />
      </Route>
      <Route path="band" component={Band} />
      <Route path="tour">
        <IndexRedirect to={toursIndexPath} />
        <Route path=":year" component={Tours}/>
      </Route>
      <Route path="video" component={Video} />
      <Route path="music" component={Music} />
      <Route path="music/:albumId">
        <IndexRedirect to="1" />
        <Route path=":activeSongNumber" component={MusicAlbum}/>
      </Route>
      <Route path="news">
        <IndexRedirect to={newsIndexPath} />
        <Route path=":year" component={News} />
      </Route>
    </Route>
  </Router>
);