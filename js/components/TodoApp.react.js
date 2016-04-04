let Logo = require('./Logo.react');
let Menu = require('./Menu.react');
let MainSection = require('./MainSection.react');
let React = require('react');
let TodoStore = require('../stores/TodoStore');

let flexBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

let TodoApp = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div style={flexBox}>
        <Logo />
        <Menu />
        <MainSection />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
  }

});

module.exports = TodoApp;
