let css = require('./content.css');
let React = require('react');

class Content extends React.Component {
  render () {
    return (
      <div className={css.block}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Content;
