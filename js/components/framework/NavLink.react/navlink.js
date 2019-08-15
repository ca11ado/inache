let _ = require('lodash');
let css = require('./navlink.css');

let React = require('react');
const { NavLink } = require('react-router-dom');

class MyNavLink extends React.Component {
  render () {
    let def = {
      className: css.link,
      activeClassName: css.activeLink
    };
    let props = _.defaults({}, this.props, def);

    return <NavLink { ...props } />
  }
}

module.exports = MyNavLink;
