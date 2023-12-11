var express = require('express');
var router = express.Router();

/* Страница главная */
router.get('/shinigami/main', function(req, res, next) {
  res.render('bleach', {
    title: "Bleach",
    picture:"/images/bleach.png",
    desc: "«Bleach» - это манга Тайто Кубо и её аниме адаптация. Манга была опубликована с августа 2001 по август 2016 года в журнале Shonen Jump. В настоящее время манга завершена и состоит из 686 глав, объединенных в 74 тома. В 2005 году манга «Bleach» была удостоена премии издательства Shogakukan как лучшая манга в категории сёнен. Она также включена в список самых продаваемых комиксов в Японии и США."
  });
});

module.exports = router;

