const _ = require('lodash');
const css = require('./legend.css');
const React = require('react');
const Solo = require('../../framework/Pictos/Solo');
const Aqoustics = require('../../framework/Pictos/Aqoustics');
const Electricity = require('../../framework/Pictos/Electricity');

const Legend = () => {

  return (
    <div className={css.block}>
      <span className={css.picto}><Solo/></span>
      <span className={css.text}>сольное выступление Н. Подорольского</span>
      <span className={css.picto}><Electricity/></span>
      <span className={css.text}>группа ИНАЧЕ в электричестве</span>
      <span className={css.picto}><Aqoustics/></span>
      <span className={css.text}>группа ИНАЧЕ в акустике</span>
    </div>
  );
};

module.exports = Legend;