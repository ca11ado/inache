let _ = require('lodash');
let css = require('./navlink.css');

let React = require('react');
let { Link } = require('react-router');

let NavLink = React.createClass({
  render () {
    let def = {
      className: css.link,
      activeClassName: css.activeLink
    };
    let props = _.defaults({}, this.props, def);

    return <Link { ...props } />
  }
});

module.exports = NavLink;