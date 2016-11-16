let Logo = require('./Logo.react/logo');
let Menu = require('./Menu.react/menu');
let React = require('react');

let flexBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

let MainLayout = React.createClass({

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
  }
});

module.exports = MainLayout;
