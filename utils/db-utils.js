/**/
const low = require('lowdb');
const db = low('../db.json');

let text = `Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки модели развития. Разнообразный и богатый опыт рамки и место обучения кадров влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.
Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа существенных финансовых и административных условий. Таким образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений.`;

let tourText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere efficitur purus nec facilisis.
 Aliquam a risus a mi blandit facilisis eget nec turpis. Suspendisse potenti. Duis quis metus turpis. Suspendisse venenatis tortor ac nunc varius, vel lobortis mi viverra. In rhoncus ligula lorem, at consequat est cursus ac. Nam pellentesque eleifend enim, sit amet pretium enim sollicitudin eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;

let songText = `
  Уж как темная ночка мне матушка,
  Да и месяц месяцович мне батюшка,
  А меньшая сестрица полудница,
  Уж как старшая злая молоньица.
  Ой ты ночь, моя ночь, где твоя дочь?
  Говори-гуляй, Москва, да за околицу не выходи,
  Гори-пылай, Москва, высоко кружат гуси-лебеди.
  Говори еще, Москва, о темном золоте семи холмов
  Гори свечой, Москва, как летний дым горька твоя любовь.
  На семи-то холмах гуси-лебеди, О семи сердцах лебедь каждая,
  Уж как первое сердце жемчужное,
  А седьмое-то сердце железное.
  Ой ты ночь, моя ночь, кто твоя дочь?
  Говори-гуляй, Москва, да за околицу не выходи,
  Гори-пылай, Москва, высоко кружат гуси-лебеди.
  Говори еще, Москва, о темном золоте семи холмов,
  Гори свечой, Москва, как летний дым горька твоя любовь.
  У меня в Москве колокола звенят –
  Троерукие, шестикрылые,
  Семистрельные, невечерние,
  Да и огненные мои лебеди!
  Ой ты ночь, моя ночь, я твоя дочь!
  Говори-гуляй, Москва, да за околицу не выходи,
  Гори-пылай, Москва, высоко кружат гуси-лебеди.
  Говори еще, Москва, о темном золоте семи холмов
  Гори свечой, Москва, как летний дым горька твоя любовь.`;

const defaultScheme = {
  press: [
    {
      date: 1464626230695,
      header: 'Самая последняя пресса',
      author: 'administrator',
      link: 'http://google.ru'
    },
    {
      date: 1462898229305,
      header: 'Первая пресса в мае',
      author: 'administrator',
      link: 'http://google.ru'
    },
    {
      date: 1431362229305,
      header: 'Пресса из 2015',
      author: 'administrator',
      link: 'http://google.ru'
    }
  ],
  news: [
    { date: 1464626230695, header: 'Самая последняя новость', text: text },
    { date: 1463762230000, header: 'Какая-то майская новость', text: text },
    { date: 1462898229305, header: 'Первая новость в мае', text: text },
    { date: 1431362229305, header: 'Новость из 2015 года', text: text }
  ],
  tours: [
    {
      date: 1482624000000,
      pictoId: 0,
      place: 'Москва',
      shortDescription: '',
      fullDescription: 'Боткинская больница, участие в благотворительном концерте'
    },
    {
      date: 1482105600000,
      pictoId: 0,
      place: 'Москва',
      links: [{ title: 'встреча в вк', url: 'http://vk.com/podaroksterju191216' }],
      shortDescription: '',
      fullDescription: 'Арт-пространство "Тайный Маяк", участие в благотворительном концерте в поддержку Олега Стерха'
    },
    {
      date: 1480809600000,
      pictoId: 0,
      place: 'Москва',
      links: [{ title: 'встреча в вк', url: 'http://vk.com/kvartnaperovskoi' }],
      shortDescription: '',
      fullDescription: 'Приходской Дом на Перовской'
    },
    {
      date: 1479945600000,
      pictoId: 0,
      place: 'Москва',
      shortDescription: '',
      fullDescription: 'ЦСПСиД "Диалог" филиал "Северный"'
    },
    {
      date: 1478908800000,
      pictoId: 0,
      place: 'Москва',
      links: [{ title: 'встреча в вк', url: 'http://vk.com/radygafest' }],
      shortDescription: '',
      fullDescription: 'Кафе-клуб "ПушкарёвЪ", фестиваль авторской песни "Радуга"'
    },
    {
      date: 1472860800000,
      pictoId: 1,
      place: 'Курс',
      links: [{ title: 'встреча в вк', url: 'https://vk.com/club118124081' }],
      shortDescription: '',
      fullDescription: 'Парк "Боева дача", фестиваль "Антифон"'
    },
    {
      date: 1475884800000,
      pictoId: 0,
      place: 'Москва',
      links: [{ title: 'встреча в вк', url: 'https://vk.com/event129608556' }],
      shortDescription: '',
      fullDescription: 'Клуб "Дача на Покровке", выступление на концерте Юлии Тузовой'
    }
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
      photo: '/img/music-albums/5vGsKR_fk0c.jpg',
      link: '/music/1464626230695',
      about: 'А тут будет текст об альбомe',
      songs: [
        { name: 'Первая песня', text: songText, playerLink: '//kroogi.com/player/iframe/3224424?locale=ru' },
        { name: 'Вторая песня', text: 'Текст второй песни5', playerLink: '//kroogi.com/player/iframe/3225805?locale=en' },
        { name: 'Третья песня', text: 'Текст третьей песни', playerLink: '//kroogi.com/player/iframe/3225804?locale=en' }
      ]
    },
    { date: 1463762230000,
      name: 'Воспрять',
      urlName: 'vospryat',
      photo: '/img/music-albums/5vGsKR_fk0c.jpg',
      link: '/music/1463762230000'
    },
    { date: 1462898229305,
      name: 'Первый альбом в мае',
      urlName: 'first_albom',
      photo: '/img/music-albums/5vGsKR_fk0c.jpg',
      link: '/music/1462898229305'
    }
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