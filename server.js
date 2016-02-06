var express = require('express');
var app = express();
var port = 8080;

var morgan = require('morgan');

app.use(morgan('dev'));

app.use('/', function(req, res){
  res.send('Our first Epress Program');
});

app.listen(port);
console.log('Server running on port %s', port);
