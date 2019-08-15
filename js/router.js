import EntryPage from './components/entry-page/entry-page';
import includes from 'lodash/includes';
const { BrowserRouter, Route, Switch } = require('react-router-dom');
const React = require('react');
const moment = require('moment');
const MainLayout = require('./components/MainLayout/MainLayout.js');
const News = require('./components/News/NewsContainer');
//const Tours = require('./components/Tours/ToursContainer');
//const Band = require('./components/Band/BandContainer');
//const Video = require('./components/Video/VideoContainer');
//const Albums = require('./components/Gallery/AlbumsContainer');
//const Album = require('./components/Gallery/Album/AlbumContainer');
const Press = require('./components/Press/PressContainer');
//const Photo = require('./components/Gallery/Photo/Photo');
//const PageNotFound = require('./components/PageNotFound');
//const Music = require('./components/Music/MusicContainer');
//const MusicAlbum = require('./components/Music/Album/AlbumContainer');
//const MainPage = require('./components/MainPage/MainPageContainer');

const currentYear = moment().year();
//const mainPagePath = '/main';
//const newsIndexPath = `/news/${currentYear}`;
//const toursIndexPath = `/tour/${currentYear}`;
//const galleryIndexPath = `/gallery/${currentYear}`;
/*<Route path=":year/:albumId/:photoId" component={Photo} />*/

const css = require('./components/MainLayout/main-layout.css');
const Logo = require('./components/Logo.react/logo');
const Menu = require('./components/Menu.react/menu');
const MainBlock = require('./components/MainBlock/mainBlock');
const Content = require('./components/MainBlock/content/content');
const isProdDomain = includes(location.hostname, 'vovremeni');
function fwefe() {
  return (<h1>Hello world</h1>);
}
function AppRouter() {
  return isProdDomain
    ? (
      <BrowserRouter>
        <Switch>
          <Route component={EntryPage} />
        </Switch>
      </BrowserRouter>
    )
    : (
      <BrowserRouter>
        <Switch>
          <div className={css.flexBox}>
            <Logo />
            <Menu />
            <MainBlock>
              <Content>
                <Route path="/press" component={Press} />
                <Route path="/news" component={News} />
              </Content>
            </MainBlock>
          </div>
        </Switch>
      </BrowserRouter>
    );
}

export default AppRouter;
/*
module.exports = isProdDomain
    ? (
      <Router history={browserHistory}>
        <Route path="/entry" component={EntryPage} />
        <Route path="/">
          <IndexRedirect to={entryPagePath} />
          <Redirect from='*' to={entryPagePath} />
        </Route>
      </Router>
    )
    : (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRedirect to={entryPagePath} />
          <Route path="press" component={Press} />
          <Route path="gallery">
            <IndexRedirect to={galleryIndexPath} />
            <Route path=":year" component={Albums} />
            <Route path=":year/:albumId" component={Photo} />
          </Route>
          <Route path="band" component={Band} />
          <Route path="tour">
            <IndexRedirect to={toursIndexPath} />
            <Route path=":year" component={Tours}/>
          </Route>
          <Route path="video" component={Video} />
          <Route path="music" component={Music}>
            <Route path=":albumId">
              <IndexRedirect to="1" />
              <Route path=":activeSongNumber" component={MusicAlbum}/>
            </Route>
          </Route>
          <Route path="news">
            <IndexRedirect to={newsIndexPath} />
            <Route path=":year" component={News} />
          </Route>
          <Route path="page-not-found" component={PageNotFound} />
        </Route>
        <Route path="/main" component={MainPage} />
        <Route path="/entry" component={EntryPage} />
      </Router>
    );
*/
