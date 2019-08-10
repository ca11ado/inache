let css = require('./element.css');
let React = require('react');

let NavLink = require('../../framework/NavLink.react/navlink.js');

class Element extends React.Component {
  render() {
    let tab = this.props.tab;

    return (
      <div className={css.tabMenu}>
        <NavLink to={tab.link}>
          {tab.name}
        </NavLink>
      </div>
    );
  }
}

module.exports = Element;
