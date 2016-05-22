let React = require('react');
let css = require('./style.css');

let Logo = React.createClass({
  render: function () {
    return (
      <div id="logo" className={css.block}>
        <img />
      </div>
    );
  }
});

module.exports = Logo;
