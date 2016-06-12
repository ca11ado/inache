// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let User = require('./User');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

var app = express();

app.use(compression());

app.use(require('serve-static')(__dirname + 'public'));
app.use(passport.initialize());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
);

var PORT = process.env.PORT || 3008;

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});