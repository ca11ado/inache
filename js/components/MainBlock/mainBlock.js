let _ = require('lodash');
let css = require('./mainBlock.css');
let React = require('react');

let MainBlock = React.createClass({
  render () {
    return (
      <div className={css.mainBlock}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = MainBlock;