const express = require('express');
const router = express.Router();
const Bleach = require("C:/aip/project_bleach/bleach/models/bleach.js").Bleach;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с shinigami');
});

// /* Страница шинигами */
router.get("/:nick", async (req, res, next) => {
  try {
    const bleach = await Bleach.findOne({ nick: req.params.nick });
    console.log(bleach);
    if (!bleach) {              //код проверяет наличие объекта с заданным "nick" в базе данных и обрабатывает результаты запроса.
      throw new Error("Нет такого Шинигами!");
    }
    res.render('bleach', {
      title: bleach.title,
      picture: bleach.avatar,
      desc: bleach.desc
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
