let db = require('./js/stores/database-utils');
let _ = require('lodash');

db.setUpConnection();

createItems();

function createItem () {
  db.createToursItem({
    date: Date.now(),
    header: 'test1',
    text: 'test2'
  });

  return db;
}

function createItems () {
  let result = [];

  let text = `Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки модели развития. Разнообразный и богатый опыт рамки и место обучения кадров влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.
Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа существенных финансовых и административных условий. Таким образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений.`;

  let tourText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere efficitur purus nec facilisis.
 Aliquam a risus a mi blandit facilisis eget nec turpis. Suspendisse potenti. Duis quis metus turpis. Suspendisse venenatis tortor ac nunc varius, vel lobortis mi viverra. In rhoncus ligula lorem, at consequat est cursus ac. Nam pellentesque eleifend enim, sit amet pretium enim sollicitudin eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;

  let items = [
    { section: 'news', date: 1464626230695, header: 'Самая последняя новость', text: text },
    { section: 'news', date: 1463762230000, header: 'Какая-то майская новость', text: text },
    { section: 'news', date: 1462898229305, header: 'Первая новость в мае', text: text },
    { section: 'news', date: 1431362229305, header: 'Новость из 2015 года', text: text },
    { section: 'tour', date: 1473714000000, header: 'Следующий концерт в начале сентября', text: tourText },
    { section: 'tour', date: 1466370000000, header: 'Следующий концерт в июне', text: tourText },
    { section: 'tour', date: 1464626230695, header: 'Самый последний концерт', text: tourText },
    { section: 'tour', date: 1463762230000, header: 'Какой-то майский концерт', text: tourText },
    { section: 'tour', date: 1462898229305, header: 'Первый концерт в мае', text: tourText },
    { section: 'tour', date: 1431362229305, header: 'Концерт в 2015 году', text: tourText },
    { section: 'tour', date: 1402347600000, header: 'Концерт в 2014 году', text: tourText }
  ];

  _.each(items, (item) => {
    if (item.section === 'news') {
      result.push(db.createNewsItem(item));
    }
    if (item.section === 'tour') {
      result.push(db.createToursItem(item));
    }
  });

  Promise.all(result)
    .then(() => {
      console.log('success');
    })
    .catch(() => {
      console.log('error');
    });

  return false;
}