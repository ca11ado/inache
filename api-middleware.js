let db = require('./js/stores/database-utils');

module.exports = (req, res, next) => {
  let result = { status: 'nothing found' };
  let path = req.path;
  let [, section = false, year = false, id = false] = path.split('/');

  if (!section) {
    return res.json(result);
  }

  let prom;
  switch (section) {
    case 'tours':
      prom = db.listTours();
      break;
    case 'news':
      prom = db.listNews();
      break;
    default:
      return next();
  }

  prom
    .then((collection) => {
      res.json({ section, year, id, collection });
    })
    .catch((err) => {
      console.log('error', err);
    });
};