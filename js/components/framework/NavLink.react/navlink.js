let _ = require('lodash');
let css = require('./navlink.css');

let React = require('react');
let { Link } = require('react-router');

let NavLink = React.createClass({
  render () {
    let props = _.defaults({}, this.props, {
      className: css.link,
      activeClassName: css.activeLink
    });

    return <Link { ...props } />
  }
});

module.exports = NavLink;