const express = require('express');
const router = express.Router();
const Bleach = require("../models/bleach").Bleach;


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Bleach.find({}, { _id: 0, title: 1, nick: 1 });
    res.cookie('greeting', 'Hi!!!');
    res.render('index', {
      title: 'Bleach',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;


