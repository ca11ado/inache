let _ = require('lodash');
let css = require('./LeftBlock.css');
let React = require('react');

let LeftBlock = React.createClass({
  render () {
    return (
      <div>
        <div className={css.blockHeader}>Ближайшие концерты:</div>
        <div className={css.line}>
          <ul>
            <li>"Иначе" в электричестве</li>
            <li>"Иначе" в акустике</li>
          </ul>
        </div>
        <div>
          Needs connection with Afisha block 
        </div>
      </div>
    );
  }
});

module.exports = LeftBlock;
