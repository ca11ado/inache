let _ = require('lodash');
let css = require('./Cover.css');
let React = require('react');

let Cover = (props) => {
  return (
    <div className={css.block}>
      <img className={css.coverImage} src={props.photo} />
    </div>
  );
};

module.exports = Cover;