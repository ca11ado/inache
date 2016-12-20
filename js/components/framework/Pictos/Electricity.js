const React = require('react');
const css = require('./pictos.css');

const Electricity = () => {

  return (
    <div
      className={`${css.pictos} ${css.electricity}`}
      title="группа ИНАЧЕ в электричестве"
    >
    </div>
  );
};

module.exports = Electricity;
