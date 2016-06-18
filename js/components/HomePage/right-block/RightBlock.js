let _ = require('lodash');
let css = require('./RightBlock.css');
let Header = require('../../main-block/Header/header');
let React = require('react');

let RightBlock = React.createClass({
  render () {
    return (
      <div>
        <Header>Главное событие</Header>
      </div>
    );
  }
});

module.exports = RightBlock;
