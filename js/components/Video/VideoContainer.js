let css = require('./video.css');
let React = require('react');
let MainBlock = require('../main-block/mainBlock');
let Header = require('../main-block/Header/header');
let Content = require('../main-block/content/content');

let Video = () => {

  return (
    <MainBlock>
      <Header>Видео</Header>
      <Content>
        Здесь будет видео
      </Content>
    </MainBlock>
  );
};

module.exports = Video;