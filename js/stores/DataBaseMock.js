let _ = require('lodash');
let moment = require('moment');

let _data = require('../constants/dataForPage');

const API_URL = 'http://127.0.0.1:3008/api/';
const _request = require('request');

function request (path) {
  return new Promise((res, rej) => {
    _request(`${API_URL}${path}`, (err, response, body) => {
      if (body) {
        let parsedBody;
        try {
          parsedBody = JSON.parse(body);
        } catch (e) {
          console.log('%c some text %o', 'color:red', 'Parsing Error >>>', e);
        }

        res(parsedBody);
      } else {
        rej(err);
      }
    });
  });
}

let DataBase = {
  getAvailableYears: (section) => request(`years/${section}`),

  getNewsForYear: (year) => new Promise((res) => {
    let activeYear = Number(year);
    let showActiveYearNews = _.chain(_data)
      .filter(({date}) => {
        return moment(date).year() === activeYear && date.section === 'news';
      })
      .value();

    res(showActiveYearNews);
  }),

  /**
   * Получить записи конкретного раздела
   * @param {String} sectionName
   */
  getSectionItems: (sectionName) => request(`${sectionName}`),

  /**
   * Получить записи конкретного раздела для конкретного года
   * @param {String} sectionName
   * @param {Number} year
   */
  getSectionItemsForYear: (sectionName, year) => request(`${sectionName}/${year}`),

  getLastSectionItems (section, count) {
    return new Promise((res) => {
      let lastItems = _.chain(_data)
        .filter({section})
        .takeRight(count)
        .value();

      res(lastItems);
    });
  },

  getFeatureTours (count) {
    return new Promise((res) => {
      let tours = _.chain(_data)
        .filter(({section, date}) => {
          let tourSection = section === 'tour';
          let featureDate = moment(date) > moment();
          return tourSection && featureDate;
        })
        .takeRight(count)
        .value();

      res(tours);
    });
  },

  /**
   * Получить альбом для фотогалереи (указанный год в url не имеет значения)
   * @param {Number} album
   */
  getAlbum: (album) => request(`gallery/2015/${album}`),

  /**
   * Получить музыкальный альбом
   * @param {String} albumUrlName - название альбома на латинице
   */
  getMusicAlbum: (albumUrlName) => request(`music/${albumUrlName}`),

  /**
   * Получить записи прессы
   */
  getPressItems: () => request('press')
};

module.exports = DataBase;