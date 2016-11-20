let _ = require('lodash');
let css = require('./Song.css');
let React = require('react');

let Song = (props) => {
  return (
    <div className={css.block}>
      <pre>{props.song.text}</pre>
    </div>
  );
};

module.exports = Song;