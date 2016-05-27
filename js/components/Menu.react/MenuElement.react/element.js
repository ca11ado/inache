let css = require('./element.css');
let React = require('react');

let Element = React.createClass({
  render: function () {
    let tab = this.props.tab;

    return (
      <a href={tab.link} className={css.tabMenu}>{tab.name}</a>
    );
  }
});

module.exports = Element;