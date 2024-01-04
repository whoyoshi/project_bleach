const express = require('express');
const router = express.Router();
const Bleach = require("C:/aip/project_bleach/bleach/models/bleach.js").Bleach;


/* Страница главная */
router.get('/shinigami/main', async (req, res, next) => {
  try {
    const mainPageData = {
      title: 'Bleach',
      picture: "/images/bleach.png",
      desc: "«Bleach» - это манга Тайто Кубо и её аниме адаптация. Манга была опубликована с августа 2001 по август 2016 года в журнале Shonen Jump. В настоящее время манга завершена и состоит из 686 глав, объединенных в 74 тома. В 2005 году манга «Bleach» была удостоена премии издательства Shogakukan как лучшая манга в категории сёнен. Она также включена в список самых продаваемых комиксов в Японии и США.",
    };

    // Запрос данных из базы данных 
    mainPageData.menu = await Bleach.find({}, { _id: 0, title: 1, nick: 1 });
    //  отвечает за рендеринг (отображение) страницы с использованием шаблона bleach.ejs.
    res.render('bleach', mainPageData);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

