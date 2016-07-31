const low = require('lowdb');
let db = low('./db.json');
const moment = require('moment');

module.exports = (req, res, next) => {
  let result = { status: 'nothing found' };
  let path = req.path;
  let [, section = false, year = false, id = false] = path.split('/');
  year = year ? Number(year) : false;

  if (!section) {
    return res.json(result);
  }

  let prom;
  switch (section) {
    case 'tours':
      if (year) {
        prom = Promise.resolve(db.get('tours')
          .filter((item) => moment(item.date).year() === year)
          .value());
      } else {
        prom = Promise.resolve(db.get('tours').value());
      }
      break;
    case 'news':
      if (year) {
        prom = Promise.resolve(db.get('news')
          .filter((item) => moment(item.date).year() === year)
          .value());
      } else {
        prom = Promise.resolve(db.get('news').value());
      }
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