let css = require('./press.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/Content/content');

let Press = React.createClass({
  render () {
    let base = '';
    let list = '';

    return (
      <MainBlock>
        <Header>Пресса</Header>
        <Content>
          <p>2015</p>
          Заголовок статьи - автор, ресурс
        </Content>
      </MainBlock>
    );
  }
});

module.exports = Press;