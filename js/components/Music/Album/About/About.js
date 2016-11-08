let _ = require('lodash');
let css = require('./About.css');
let React = require('react');

let About = React.createClass({
  render () {

    return (
      <div>{this.props.about}</div>
    );
  }
});

module.exports = About;