let http = require('http')
let express = require('express');
let app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hey ici c\'est l\'Acceuil'});
  });

  app.get('/about', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hey ici c\'est la page À propos'});
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});