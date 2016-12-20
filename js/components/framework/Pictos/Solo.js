const React = require('react');
const css = require('./pictos.css');

const Solo = () => {

  return (
    <div
      className={`${css.pictos} ${css.solo}`}
      title="сольное выступление Н. Подорольского"
    ></div>
  );
};

module.exports = Solo;
