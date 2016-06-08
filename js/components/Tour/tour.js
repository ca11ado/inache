let css = require('./tour.css');
let React = require('react');

let Tour = React.createClass({
  render () {
    return (
      <div className={css.blockHeader}>
        Афиша
      </div>
    );
  }
});

module.exports = Tour;