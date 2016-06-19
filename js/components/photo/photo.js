let css = require('./photo.css');
let React = require('react');
let SubNavigation = require('../sub-navigation/subNavigation');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/content/content');

let Photo = React.createClass({
  render () {
    let base = '';
    let list = '';

    return (
      <MainBlock>
        <Header>Фото</Header>
        <SubNavigation base={base} list={list} />
        <Content>Тут будет фото</Content>
      </MainBlock>
    );
  }
});

module.exports = Photo;