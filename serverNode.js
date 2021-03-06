// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');
let bodyParser = require('body-parser');
let api = require('./api-middleware');
const favicon = require('serve-favicon');
const cors = require('./cors-middleware');

var app = express();

app.use(compression());

// Add headers
app.use(cors);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use('/api', api);

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var PORT = process.env.PORT || 3008;
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT);
});
