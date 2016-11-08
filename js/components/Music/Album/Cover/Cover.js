let _ = require('lodash');
let css = require('./Cover.css');
let React = require('react');

let Cover = React.createClass({
  render () {

    return (
      <div className={css.block}>
        <img className={css.coverImage} src={this.props.photo} />
      </div>
    );
  }
});

module.exports = Cover;