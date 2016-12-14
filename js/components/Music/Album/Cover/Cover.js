let _ = require('lodash');
let css = require('./Cover.css');
let React = require('react');

let Cover = (props) => {
  return (
    <div className={css.block}>
      <a href={props.photo} target="_blank"><img className={css.coverImage} src={props.photo} /></a>
    </div>
  );
};

module.exports = Cover;