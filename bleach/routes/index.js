var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Куросаки */
router.get('/kurosaki', function(req, res, next) {
  res.render('bleach', {
    title: "Куросаки Ичиго",
    picture:"images/kurosaki.png",
    desc: "Куросаки Ичиго - это главный персонаж манги и аниме «Блич» (Bleach), созданный Тайто Кубо. Ичиго - обычный подросток, который обретает способности Шинигами (богов смерти) после встречи с девушкой по имени Рукия Кучики. Он выполняет обязанности временного Шинигами и борется со зловещими духами, известными как Пустые, чтобы защищать мир людей. Ичиго обладает огромной силой и упорством, а также необычным внешним видом из-за своих оранжевых волос и ярко-оранжевых глаз. Он часто выступает в защиту своих друзей и близких, и его характер отличается отвагой, решительностью и состраданием."
  });
});


/* Страница Рукии */
router.get('/rukia', function(req, res, next) {
  res.render('bleach', {
    title: "Кучики рукия",
    picture:"images/rukia2.png",
    desc: "Кучики Рукия - это также персонаж из аниме и манги «Блич» (Bleach) и является шинигами. Рукия Кучики встречается с Ичиго в первой серии, когда приходит в мир людей. В дальнейшем Рукия играет важную роль в обучении Ичиго и его друзей и помогает им в борьбе с различными угрозами. Она также имеет свою собственную сложную и интересную историю, связанную с ее прошлым. Рукия - это сильная и умная девушка, которая готова пожертвовать всем за своих друзей и родных."
  });
});

/* Страница Уноханы */
router.get('/unohana', function(req, res, next) {
  res.render('bleach', {
    title: "Унохана Рецу",
    picture:"images/unohana.png",
    desc: "Рецу Унохана, ранее известная как Ячиру Унохана, была капитаном четвёртого отряда Готея 13. Она была одним из самых старых и опытных капитанов, лучшим врачом Общества душ, а также носила титул первой Кенпачи. Её лейтенантом была Исане Котецу. Хотя обычно она выглядит доброй и кроткой, во время её битвы с Зараки её взгляд становится тёмным, в глазах ясно читается угроза. Также она распускает косу, обнажая шрам."
  });
});


module.exports = router;

