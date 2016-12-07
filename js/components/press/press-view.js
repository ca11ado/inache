let _ = require('lodash');
let css = require('./press.css');
let MainBlock = require('../MainBlock/mainBlock');
let Header = require('../MainBlock/Header/header');
let Content = require('../MainBlock/content/content');
let React = require('react');

let Press = (props) => {
  let items = props.items;

  let itemsByYear = _.map(items, ({ year, presses }) => {
    return (
      <div key={year}>
        <p>{year}</p>
        <ul>
        { _.map(presses, ({ header, link, author }, index) => {
          return (
            <li key={index}>
              {header} &mdash; {author}, <a href={link}>resource</a>
            </li>
          );
        })}
        </ul>
      </div>
    );
  });

  return (
  <MainBlock>
    <Header>Пресса</Header>
    <Content>
      {itemsByYear}
    </Content>
  </MainBlock>
  );
};

module.exports = Press;