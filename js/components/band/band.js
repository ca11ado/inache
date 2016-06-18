let css = require('./band.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/Content/content');

let Band = React.createClass({
  getInitialState () {
    return {};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render () {
    return (
      <MainBlock>
        <Header>О группе</Header>
        <Content>
          <h3>Пресс-релиз</h3>

          <p>Чаще всего днём рождения коллектива считается дата первого концерта. Именно поэтому настоящим рождением группы "Иначе" музыканты считают 17 октября 2009 года – в этот день группа впервые выступила под нынешним названием.</p>
          <p>В общем и целом стилистику группы…</p>

          <h3>Состав группы</h3>
          <div className={css.photoWrapper}>
            <img className={css.photo} src="/img/band/nikolai.jpg" />
            <img className={css.photo} src="/img/band/ruslan.jpg" />
            <img className={css.photo} src="/img/band/anna.jpg" />
          </div>
        </Content>
      </MainBlock>
    );
  }
});

module.exports = Band;