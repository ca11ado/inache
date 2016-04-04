'use strict';
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.listen(3008);

console.log('server starts on port 3008');
