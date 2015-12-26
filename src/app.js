var express = require('express');

// Constants
var PORT = 3000;

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || PORT);
