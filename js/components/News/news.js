let _ = require('lodash');
let css = require('./news.css');
let React = require('react');

let longText = 'This reset gives you more flexibility than its predecessors — you can use content-box or padding-box (where supported) at will, without worrying about a universal selector overriding your CSS. We went into more depth on this technique and the reasoning behind it in "Inheriting box-sizing Probably Slightly Better Best Practice". One potential gripe with it is that box-sizing isnt normally inherited, so its specialized behavior, not quite the same as something youd normally put in a reset.Vendor Prefixes';

let years = [
  { year: 2013, content: longText, isActive: true },
  { year: 2014, content: 'Новости для 2014 года'},
  { year: 2015, content: 'Новости для 2015 года'}
];
let showYears = years.reduce((accum, year, index) => {
  let key = `news-year-${index}`;
  let className = css.years;
  accum.push(React.createElement('span', { key, className }, year.year));
  return accum;
}, []);

let currentYear = _.chain(years)
  .find({ isActive: true })
  .value();

let { year:data, content:text } = currentYear;

let News = React.createClass({
  render () {
    return (
      <div className={css.blockWrapper}>
        <div className={css.header}>
          Новости
        </div>
        <div className={css.subHeader}>
          {showYears}
        </div>
        <div className={css.content}>
          {data}<br />
          {text}
        </div>
      </div>
    );
  }
});

module.exports = News;
