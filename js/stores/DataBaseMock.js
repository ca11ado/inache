let _ = require('lodash');
let moment = require('moment');
let _allNews = require('../components/News/dataForPage');

let DataBase = {
  getAllNews: () => new Promise((res, rej) => {
    res(_allNews);
  }),
  
  getNewsForYear: (year) => new Promise ((res, rej) => {
    let showActiveYearNews = _.chain(_allNews)
      .filter(({ date }) => moment(date).year() === year)
      .value();
    
    res(showActiveYearNews);
  })


};

module.exports = DataBase;