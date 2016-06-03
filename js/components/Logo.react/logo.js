let React = require('react');
let css = require('./logo.css');

let Logo = React.createClass({
  render: function () {
    return (
      <div id="logo" className={css.block}>
        <img className={css.logo} src="/img/icons/logo.jpg" />
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
