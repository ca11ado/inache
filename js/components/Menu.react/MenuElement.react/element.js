let css = require('./element.css');
let React = require('react');

let NavLink = require('../../framework/NavLink.react/navlink.js');

let Element = React.createClass({
  render: function () {
    let tab = this.props.tab;

    return (
      <NavLink to={tab.link} className={css.tabMenu}>
        {tab.name}
      </NavLink>
    );
  }
});

module.exports = Element;