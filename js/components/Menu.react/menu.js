let css = require('./menu.css');
let React = require('react');

let Menu = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
    let menuSections = [
      { name: 'Новости' },
      { name: 'Афиша' },
      { name: 'О группе' },
      { name: 'Музыка' },
      { name: 'Видео' },
      { name: 'Фото' },
      { name: 'Пресса ' }
    ];
    let htmlMenus = menuSections.reduce((prev, menu) => {
      return prev + `<span>${name}</span>`;
    }, '');
    return (
      <div id="menu" className={css.block}>
        {htmlMenus}
      </div>
    );
  }
});

module.exports = Menu;
