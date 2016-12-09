let Logo = require('./Logo.react/logo');
let Menu = require('./Menu.react/menu');
let MainBlock = require('./MainBlock/mainBlock');
let Content = require('./MainBlock/content/content');
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
        <MainBlock>
          <Content>
            {this.props.children}
          </Content>
        </MainBlock>
      </div>
    );
  }
});

module.exports = MainLayout;
