let css = require('./homePage.css');
let React = require('react');

let HomePage = React.createClass({
  render () {

    return (
      <div className={css.block}>
        <div className={css.leftBlock}></div>
        <div className={css.middleBlock}>
          <h2>Последние новости</h2>
          
        </div>
        <div className={css.rightBlock}></div>
      </div>
    );
  }
});

module.exports = HomePage;