const _ = require('lodash');
const React = require('react');
const css = require('./right-block-view.css');

const RightBlockView = (props) => {

  return (
    <div className={css.block}>
        <div className={css.header}>Главное событие:</div>
    </div>
  );
};

module.exports = RightBlockView;
