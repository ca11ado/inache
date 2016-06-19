let request = require('request');

function reqProm (url) {
  return new Promise((res, rej) => {
    request(url, (err, response, body) => {
      if (err) {
        return rej(err);
      }

      return res(body);
    });
  });
}

module.exports = {
  getNews () {
    return reqProm('http://127.0.0.1:3008/api/news');
  }
};