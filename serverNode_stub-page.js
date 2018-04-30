// server.js
var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public', 'img', 'stub-page')));

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'stub-page.html'));
});

var PORT = process.env.PORT || 3009;
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT);
});
