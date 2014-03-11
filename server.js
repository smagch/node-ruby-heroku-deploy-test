// Mock server to showcase react app
// This server shouldn't be deployed in production
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'assets')));
// return project details
app.get('/', function (req, res) {
  res.send('<html>Hello World. CSS is <a href="/css/style.css">here</a></html>');
});

var port = Number(process.env.PORT || 5000);
http.createServer(app).listen(port, function() {
  console.log('server listen on PORT 5000');
});
