let css = require('./video.css');
let React = require('react');
let MainBlock = require('../MainBlock/mainBlock');
let Header = require('../MainBlock/Header/header');
let Content = require('../MainBlock/content/content');

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