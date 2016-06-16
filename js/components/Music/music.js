let css = require('./music.css');
let React = require('react');
let Content = require('../Content/content');
let Header = require('../Content/Header/header');

let Music = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render () {
    return (
      <Content>
        <Header>Музыка</Header>
        <div className={css.albumsRow}>
          <div className={css.coverWrap}>
            <img className={css.albumCover} src="/img/albums/4mEhutW27Dw.jpg" />
            <div className={css.description}>2015 Воспрять</div>
          </div>
          <div className={css.coverWrap}>
            <img className={css.albumCover} src="/img/albums/5vGsKR_fk0c.jpg" />
            <div  className={css.description}>2016 Теплей (сингл)</div>
          </div>
          <div className={css.coverWrap}>
            <img className={css.albumCover} src="/img/albums/6uvv0G7sS9s.jpg" />
            <div  className={css.description}>2016 Something else</div>
          </div>
        </div>
      </Content>
    );
  }
});

module.exports = Music;