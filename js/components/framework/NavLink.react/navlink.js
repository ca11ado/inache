let css = require('./navlink.css');

let React = require('react');
let { Link } = require('react-router');

let NavLink = React.createClass({
  render () {
    return <Link { ...this.props } activeClassName={css.activeLink} />
  }
});

module.exports = NavLink;