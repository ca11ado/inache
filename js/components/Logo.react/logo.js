let React = require('react');
let css = require('./logo.css');
let NavLink = require('../framework/NavLink.react/navlink');

let Logo = React.createClass({
  render: function () {
    return (
      <div id="logo" className={css.block}>
        <NavLink to="/">
          <div className={css.logo}></div>
        </NavLink>
        <div id="contacts" className={css.contactsWrapper}>
          Связь с группой<br />
          <a href="mailto:inache.band@mail.ru">inache.band@mail.ru</a><br />
          +7(925)317-2233, Николай
          <div className={css.socialsWrapper}>
            <div className={css.socials}></div>
            <div className={css.socials}></div>
            <div className={css.socials}></div>
            <div className={css.socials}></div><br />
            <div className={css.socials}></div>
            <div className={css.socials}></div>
            <div className={css.socials}></div>
            <div className={css.socials}></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Logo;
