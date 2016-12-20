let _ = require('lodash');
let css = require('./press.css');
let React = require('react');
const shortid = require('shortid');

let Press = (props) => {
  let items = props.items;

  let itemsByYear = _.map(items, ({ year, presses }) => {
    return (
      <div key={year}>
        <div>
					{year}
					<a name={year}>&nbsp;</a>
				</div>
        <ul>
        { _.map(presses, ({ header, link, author }, index) => {
          return (
            <li key={index}>
              {header} &mdash; {author}, <a href={link}>resource</a>
            </li>
          );
        })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <div className={css.anchorNavigation}>
        { _.map(items, (({ year }) => (
          <a
            key={shortid.generate()}
            className={css.anchor}
            href={'#' + year}
          >
            {year}
          </a>
        ) )).reverse() }
      </div>
      <div>{itemsByYear}</div>
    </div>
  );
};

module.exports = Press;
