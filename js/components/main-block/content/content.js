let css = require('./content.css');
let React = require('react');

let Content = React.createClass({
  render () {
    return (
      <div className={css.block}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;