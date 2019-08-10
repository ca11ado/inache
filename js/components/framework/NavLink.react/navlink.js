let _ = require('lodash');
let css = require('./navlink.css');

let React = require('react');
const { Link } = require('react-router-dom');

class NavLink extends React.Component {
  render () {
    let def = {
      className: css.link,
      activeClassName: css.activeLink
    };
    let props = _.defaults({}, this.props, def);

    return <Link { ...props } />
  }
}

module.exports = NavLink;
