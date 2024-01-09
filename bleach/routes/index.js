const express = require('express');
const router = express.Router();
const Bleach = require("../models/bleach").Bleach;
const User = require("../models/user").User;

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Log In'});
});

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Bleach.find({}, { _id: 0, title: 1, nick: 1 });
    // req.session.greeting = "Hi!!!";
    res.render('index', { title: 'Bleach', menu: menu, counter:req.session.counter });
  } 
  catch (err) {
    next(err);
  }
});

/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  try {
      const user = await User.findOne({ username });

      if (user) {
          if (user.checkPassword(password)) {
              req.session.user = user._id;
              res.redirect('/');
          } else {
              res.render('logreg', { title: 'Log In', error: 'Неверный пароль' });
          }
      } else {
          const newUser = new User({ username, password });
          await newUser.save();
          req.session.user = newUser._id;
          res.redirect('/');
      }
  } catch (err) {
      next(err);
  }
});

router.get('/logreg', function(req, res, next) {
  res.render('logreg',{error:null});
  });
   
module.exports = router;


