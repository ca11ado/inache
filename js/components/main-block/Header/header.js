let _ = require('lodash');
let css = require('./header.css');
let React = require('react');

let Header = React.createClass({
  render () {
    return (
      <div className={css.headerBlock}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Header;