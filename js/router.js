//const News = require('./components/News/NewsContainer');
//const Tours = require('./components/Tours/ToursContainer');
//const Band = require('./components/Band/BandContainer');
//const Video = require('./components/Video/VideoContainer');
//const Albums = require('./components/Gallery/AlbumsContainer');
//const Album = require('./components/Gallery/Album/AlbumContainer');
//const Photo = require('./components/Gallery/Photo/Photo');
//const PageNotFound = require('./components/PageNotFound');
//const Music = require('./components/Music/MusicContainer');
//const MusicAlbum = require('./components/Music/Album/AlbumContainer');
//const MainPage = require('./components/MainPage/MainPageContainer');
//const mainPagePath = '/main';
//const newsIndexPath = `/news/${currentYear}`;
//const toursIndexPath = `/tour/${currentYear}`;
//const galleryIndexPath = `/gallery/${currentYear}`;
/*<Route path=":year/:albumId/:photoId" component={Photo} />*/

import EntryPage from 'js/components/entry-page/entry-page';
import includes from 'lodash/includes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
import MainLayout from 'js/components/MainLayout/MainLayout.js';
import PressPage from 'js/components/Press/PressContainer';

const currentYear = moment().year();

const css = require('./components/MainLayout/main-layout.css');
const Logo = require('./components/Logo.react/logo');
const Menu = require('./components/Menu.react/menu');
const MainBlock = require('./components/MainBlock/mainBlock');
const Content = require('./components/MainBlock/content/content');
const isProdDomain = includes(location.hostname, 'vovremeni');

class SiteBody extends React.Component {
  render() {
    return (
      <div className={css.flexBox}>
        <Logo />
        <Menu />
        <MainBlock>
          <Content>
            {this.props.children}
          </Content>
        </MainBlock>
      </div>
    );
  }
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
          <SiteBody>
            <Route path="/press" component={PressPage} />
            <Route path="/news" component={PressPage} />
          </SiteBody>
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
