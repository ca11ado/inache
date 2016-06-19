// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');
let bodyParser = require('body-parser');
let db = require('./js/stores/database-utils');
let api = require('./api-middleware');

var app = express();

db.setUpConnection();

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var PORT = process.env.PORT || 3008;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});
