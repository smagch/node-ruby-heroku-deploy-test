// Mock server to showcase react app
// This server shouldn't be deployed in production
var express = require('express');
var path = require('path');
var app = express();

app.set('port', Number(process.env.PORT) || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/product', function (req, res) {
  res.render('product');
});

app.listen(app.get('port'), function() {
  console.log('server listen on PORT %d', app.get('port'));
});
