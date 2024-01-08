var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bleachDB");
var User = require("./models/user.js").User;

var first_user = new User({
  username: "Nika",
  lastname: "Hrom",
  password: "1234"
});
first_user.save()
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    throw err;
  });
