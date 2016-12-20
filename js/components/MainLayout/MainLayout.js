const Logo = require('../Logo.react/logo');
const Menu = require('../Menu.react/menu');
const MainBlock = require('../MainBlock/mainBlock');
const Content = require('../MainBlock/content/content');
const React = require('react');
const css = require('./main-layout.css');

const MainLayout = React.createClass({

  render: function() {
    return (
      <div className={css.flexBox}>
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
