var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Куросаки */
router.get('/kurosaki', function(req, res, next) {
  res.send("<h1>Страница Куросаки Ичиго</h1>")
});

/* Страница Рукии */
router.get('/rukia', function(req, res, next) {
  res.send("<h1>Страница Кучики Рукии</h1>")
});

/* Страница Уноханы */
router.get('/unohana', function(req, res, next) {
  res.send("<h1>Страница Уноханы Рецу</h1>")
});


module.exports = router;
