const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bleachDB");
const User = require("./models/user.js").User;

const first_user = new User({
  username: "Nikahrom",
  password: "qwerty123"
});

first_user.save()
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    throw err;
  });