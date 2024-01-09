const express = require('express');
const router = express.Router();
const Bleach = require("C:/aip/project_bleach/bleach/models/bleach.js").Bleach;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Bleach.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Bleach',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

