const React = require('react');
const css = require('./main-page-view.css');
let Logo = require('../Logo.react/logo');
let Menu = require('../Menu.react/menu');
let MainBlock = require('../MainBlock/mainBlock');
let Content = require('../MainBlock/content/content');

const MainPageView = (props) => {

  return (
    <div>
        <Logo />
        <Menu />
        <MainBlock>
            <div className={css.block}>
                <div className={css.leftBlock}>
                    <h2>Left block</h2>
                </div>
                <div className={css.centerBlock}>
                    <h2>Content block</h2>
                </div>
                <div className={css.rightBlock}>
                    <h2>Right block</h2>
                </div>
            </div>
        </MainBlock>
    </div>
  );
};

module.exports = MainPageView;
