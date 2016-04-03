let Logo = require('./Logo.react/logo');
let Menu = require('./Menu.react/menu');
let React = require('react');

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
        {this.props.children}
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
