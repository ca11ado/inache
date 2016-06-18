function authParse (req, res, next) {
  console.log(req.body);
  let loginUrl = '/login' === req.url;
  let logOut = '/logou' === req.url;

  if (logOut) {
    delete req.session.authorized;
  }

  if (loginUrl) {
    res.send(loginView);
    return;
  }
  if (req.session.authorized) {
    next();
  } else {
    if (req.body.login === 't0s') {
      req.session.authorized = true;
      next();
    } else {
      res.send('Not authorized');
    }
  }
  return;
}