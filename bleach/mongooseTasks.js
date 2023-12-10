var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')

var Bleach = require("./models/bleach").Bleach
var bleach = new Bleach({
  title: "Капитан",
  nick: "captain"
})
console.log(bleach);

bleach.save().then(function(bleach) {
    console.log(savedBleach.title);
  })
  .catch(function(error) {
    console.error(error);
  });

// console.log(bleach.title) - это может вызвать ошибку, так как сохранение объекта в базе данных может быть асинхронной операцией, и свойства объекта могут быть недоступны до того, как операция завершится. Для исправления кода следует использовать метод "catch()" для обработки ошибок при сохранении объекта в базе данных. Также, обращение к свойству "title" следует делать после успешного сохранения объекта в базе данных. 
// внутри функции обратного вызова для метода "then()" используется аргумент "savedBleach" вместо "bleach", чтобы избежать путаницы с исходным объектом. Используется метод "catch()" для обработки ошибок при сохранении объекта в базе данных.