let css = require('./menu.css');
let React = require('react');
let Element = require('./MenuElement.react/element');

class Menu extends React.Component {
  /**
   * @return {object}
   */
  render() {
    let menuSections = [
      { name: 'Новости', link: '/news' },
      { name: 'Афиша', link: '/tour' },
      { name: 'О группе', link: '/band' },
      { name: 'Музыка', link: '/music' },
      { name: 'Видео', link: '/video' },
      { name: 'Фото', link: '/gallery' },
      { name: 'Пресса', link: '/press' }
    ];

    let menu = menuSections.reduce((accum, tab, index) => {
      let key = `tab-${index}`;
      let props = {
        key,
        tab
      };
      accum.push(<Element { ...props } />);
      return accum;
    }, []);

    return (
      <div className={css.block}>
        {menu}
      </div>
    );
  }
}

module.exports = Menu;
