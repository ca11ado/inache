let user = {
  validPassword (password) {
    return password == 123;
  }
};

module.exports = {
  findOne ({ username }, callback) {
    if (username == 't0s') {
      callback(null, user);
    } else {
      callback('some not helpful error');
    }
  }
};
