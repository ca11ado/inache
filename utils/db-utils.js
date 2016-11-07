/**/
const low = require('lowdb');
const db = low('../db.json');

let text = `Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки модели развития. Разнообразный и богатый опыт рамки и место обучения кадров влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.
Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа существенных финансовых и административных условий. Таким образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений.`;

let tourText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere efficitur purus nec facilisis.
 Aliquam a risus a mi blandit facilisis eget nec turpis. Suspendisse potenti. Duis quis metus turpis. Suspendisse venenatis tortor ac nunc varius, vel lobortis mi viverra. In rhoncus ligula lorem, at consequat est cursus ac. Nam pellentesque eleifend enim, sit amet pretium enim sollicitudin eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;

const defaultScheme = {
  news: [
    { date: 1464626230695, header: 'Самая последняя новость', text: text },
    { date: 1463762230000, header: 'Какая-то майская новость', text: text },
    { date: 1462898229305, header: 'Первая новость в мае', text: text },
    { date: 1431362229305, header: 'Новость из 2015 года', text: text }
  ],
  tours: [
    { date: 1466370000000, header: 'Следующий концерт в июне', text: tourText },
    { date: 1464626230695, header: 'Самый последний концерт', text: tourText },
    { date: 1463762230000, header: 'Какой-то майский концерт', text: tourText },
    { date: 1462898229305, header: 'Первый концерт в мае', text: tourText },
    { date: 1431362229305, header: 'Концерт в 2015 году', text: tourText },
    { date: 1402347600000, header: 'Концерт в 2014 году', text: tourText }
  ],
  gallery: [
    {
      date: 1466370000000,
      name: 'Следующийй концерт в июне',
      photo: '/img/albums/6uvv0G7sS9s.jpg',
      link: '/gallery/2016/1466370000000',
      photos: [
        { original: '/img/albums/1466370000000/1.jpg' },
        { original: '/img/albums/1466370000000/2.jpg' },
        { original: '/img/albums/1466370000000/3.jpg' },
        { original: '/img/albums/1466370000000/1.jpg' },
        { original: '/img/albums/1466370000000/2.jpg' },
        { original: '/img/albums/1466370000000/1.jpg' },
        { original: '/img/albums/1466370000000/3.jpg' },
        { original: '/img/albums/1466370000000/1.jpg' },
        { original: '/img/albums/1466370000000/2.jpg' },
        { original: '/img/albums/1466370000000/3.jpg' }
      ]
    },
    { date: 1464626230695, name: 'Самый последний концерт', photo: '/img/albums/6uvv0G7sS9s.jpg', link: '/gallery/2016/1464626230695' },
    { date: 1463762230000, name: 'Какой-то майский концерт', photo: '/img/albums/6uvv0G7sS9s.jpg', link: '/gallery/2016/1463762230000' },
    { date: 1462898229305, name: 'Первый концерт в мае', photo: '/img/albums/6uvv0G7sS9s.jpg', link: '/gallery/2016/1462898229305' },
    { date: 1431362229305, name: 'Концерт в 2015 году', photo: '/img/albums/6uvv0G7sS9s.jpg', link: '/gallery/2015/1431362229305' },
    { date: 1402347600000, name: 'Концерт в 2014 году', photo: '/img/albums/6uvv0G7sS9s.jpg', link: '/gallery/2014/1402347600000' }
  ],
  music: [
    {
      date: 1464626230695,
      name: 'Темплей (сингл)',
      urlName: 'templey',
      photo: '/img/music-albums/4mEhutW27Dw.jpg',
      link: '/music/1464626230695',
      about: 'А тут будет текст об альбом',
      sings: [
        { name: 'Первая песня', text: 'Текст первой песни', playerLink: 'http://yandex.ru' },
        { name: 'Вторая песня', text: 'Текст второй песни', playerLink: 'http://yandex.ru' },
        { name: 'Третья песня', text: 'Текст третьей песни', playerLink: 'http://yandex.ru' }
      ]
    },
    { date: 1463762230000, name: 'Воспрять', urlName: 'vospryat', photo: '/img/music-albums/5vGsKR_fk0c.jpg', link: '/music/1463762230000' },
    { date: 1462898229305, name: 'Первый альбом в мае', urlName: 'first_albom', photo: '/img/music-albums/6uvv0G7sS9s.jpg', link: '/music/1462898229305' }
  ]
};

function setDefaultScheme (scheme) {
  return db
    .defaults(scheme)
    .value();
}

function getSection (name) {
  return db.get(name)
    .value();
}

setDefaultScheme(defaultScheme);