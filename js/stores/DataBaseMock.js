let _ = require('lodash');
let moment = require('moment');
let _allNews = require('../constants/dataForPage');

let DataBase = {
  getAvailableYears: () => new Promise((res, rej) => {
    let years = _.chain(_allNews)
      .map(({ date }) => moment(date).year())
      .uniq()
      .reverse()
      .value();

    res(years);
  })
  ,

  getNewsForYear: (year) => new Promise ((res, rej) => {
    let activeYear = Number(year);
    let showActiveYearNews = _.chain(_allNews)
      .filter(({ date }) => moment(date).year() === activeYear)
      .value();

    res(showActiveYearNews);
  }),

  getLastNews (count) {
    return new Promise((res, rej) => {
      let lastNews = _.chain(_allNews)
        .takeRight(count)
        .value();

      res(lastNews);
    });
  }
};

module.exports = DataBase;