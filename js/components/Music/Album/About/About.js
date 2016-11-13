let _ = require('lodash');
let css = require('./About.css');
let React = require('react');

let About = (props) => {
  return (
    <div>{props.about}</div>
  );
};

module.exports = About;