let _ = require('lodash');
let css = require('./mainBlock.css');
let React = require('react');

class MainBlock extends React.Component {
  render () {
    return (
      <div id="mainBlock" className={css.mainBlock}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = MainBlock;
