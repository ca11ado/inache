let _ = require('lodash');
let css = require('./subNavigation.css');
let React = require('react');
let moment = require('moment');
let NavLink = require('../framework/NavLink.react/navlink');

class SubNavigation extends React.Component {
  render () {
    let list = this.props.list;
    let base = this.props.base;

    let SubNav = _.map(list, ({ title, link }, index) => {
      let to = `/${base}/${link}`;
      let key = `subNav-${index}`;
      return React.createElement('div', {
        className: css.item, key
      }, <NavLink to={to}>{title}</NavLink>)
    });
    SubNav = _.size(SubNav) > 0 ? SubNav : '';

    return (
      <div className={css.blockWrapper}>
        {SubNav}
      </div>
    );
  }
}

module.exports = SubNavigation;
