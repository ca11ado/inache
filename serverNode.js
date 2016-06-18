// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');

let cookieParser = require('cookie-parser');
let session = require('express-session');
let authParse = require('./auth');

var app = express();
app.use(compression());
// serve our static stuff like index.css

app.use(cookieParser());
app.use(session({ secret: 't0s', resave: true, saveUninitialized: true }));
app.use(authParse);

app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var PORT = process.env.PORT || 3008;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});