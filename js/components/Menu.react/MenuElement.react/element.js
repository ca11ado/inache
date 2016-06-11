let css = require('./element.css');
let React = require('react');

let NavLink = require('../../framework/NavLink.react/navlink.js');

let Element = React.createClass({
  render: function () {
    let tab = this.props.tab;

    return (
      <div className={css.tabMenu}>
        <NavLink activeClassName={css.active} className={css.link} to={tab.link}>
          {tab.name}
        </NavLink>
      </div>
    );
  }
});

module.exports = Element;