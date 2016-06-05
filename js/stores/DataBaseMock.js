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
    let showActiveYearNews = _.chain(_allNews)
      .filter(({ date }) => moment(date).year() === year)
      .value();
    
    res(showActiveYearNews);
  })


};

module.exports = DataBase;