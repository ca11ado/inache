let _ = require('lodash');
let moment = require('moment');
let _data = require('../constants/dataForPage');

let DataBase = {
  getAvailableYears: (section) => new Promise((res, rej) => {
    let years = _.chain(_data)
      .filter({ section })
      .map(({ date }) => moment(date).year())
      .uniq()
      .reverse()
      .value();

    res(years);
  }),

  getNewsForYear: (year) => new Promise ((res, rej) => {
    let activeYear = Number(year);
    let showActiveYearNews = _.chain(_data)
      .filter(({ date }) => {
        return moment(date).year() === activeYear && date.section === 'news';
      })
      .value();

    res(showActiveYearNews);
  }),

  /**
   * Получить записи конкретного раздела для конкретного года
   * @param {String} secionName
   * @param {Number} year
   */
  getSectionItemsForYear: (secionName, year) => new Promise ((res, rej) => {
    let activeYear = Number(year);
    let showActiveYearNews = _.chain(_data)
      .filter(({ date, section }) => {
        return moment(date).year() === activeYear && section === secionName;
      })
      .value();

    res(showActiveYearNews);
  }),

  getLastNews (count) {
    return new Promise((res, rej) => {
      let lastNews = _.chain(_data)
        .filter({ section: 'news' })
        .takeRight(count)
        .value();

      res(lastNews);
    });
  }
};

module.exports = DataBase;