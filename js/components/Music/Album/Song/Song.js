let _ = require('lodash');
let css = require('./Song.css');
let React = require('react');

let Song = React.createClass({
  render () {

    return (
      <div className={css.block}>
        <pre>{this.props.song.text}</pre>
      </div>
    );
  }
});

module.exports = Song;