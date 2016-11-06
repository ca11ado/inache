const low = require('lowdb');
let db = low('./db.json');
const moment = require('moment');
let _ = require('lodash');

const METHODS = {
  tours: 'tours',
  news: 'news',
  gallery: 'gallery',
  years: 'years'
};

module.exports = (req, res, next) => {
  let result = { status: 'nothing found' };
  let path = req.path;
  let [, section = false, path1 = false, id = false] = path.split('/');
  path1 = !_.isNaN(Number(path1)) ? Number(path1) : path1;

  if (!section) {
    return res.json(result);
  }

  let prom;
  switch (section) {
    case METHODS.tours:
      if (path1) {
        prom = Promise.resolve(db.get(METHODS.tours)
          .filter((item) => moment(item.date).year() === path1)
          .value());
      } else {
        prom = Promise.resolve(db.get(METHODS.tours).value());
      }
      break;
    case METHODS.news:
      if (path1) {
        prom = Promise.resolve(db.get(METHODS.news)
          .filter((item) => moment(item.date).year() === path1)
          .value());
      } else {
        prom = Promise.resolve(db.get(METHODS.news).value());
      }
      break;
    case METHODS.gallery:
      if (id) {
        prom = Promise.resolve(db.get(METHODS.gallery)
          .find({ date: Number(id) })
          .value());
      } else if (path1) {
        prom = Promise.resolve(db.get(METHODS.gallery)
          .filter((item) => moment(item.date).year() === path1)
          .value());
      } else {
        prom = Promise.resolve(db.get(METHODS.gallery).value());
      }
      break;
    case METHODS.years:
      if (!path1) {
        prom = Promise.resolve([]);
        break;
      }
      prom = Promise.resolve(db.get(METHODS[path1])
        .map(({ date }) => moment(date).year())
        .concat(moment().year())
        .uniq()
        .sortBy((year) => year)
        .value());
      break;
    default:
      return next();
  }

  prom
    .then((collection) => {
      res.json(collection);
    })
    .catch((err) => {
      console.log('error', err);
    });
};