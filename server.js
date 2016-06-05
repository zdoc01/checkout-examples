var path = require('path');
var express = require('express');
var app = express();

var PORT = process.argv[2] || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Server listening on port %s', PORT);
});
