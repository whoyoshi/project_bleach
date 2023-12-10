const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

var schema = mongoose.Schema({ name: String})
schema.methods.gotei = function(){
  console.log(this.get("name") + " состоят в организации Готей 13");
}

const Bleach = mongoose.model('Bleach', schema);

const shinigami = new Bleach({ name: 'Шинигами' });
shinigami.save().then(() => shinigami.gotei());

//данный код выполняет следующие операции:
// - Подключается к базе данных MongoDB.
// - Определяет модель Bleach с одним полем.
// - Создает новый экземпляр модели с именем "Шинигами".
// - Сохраняет созданный экземпляр в базу данных и выводит сообщение после сохранения.


// shinigami.save().then(() => shinigami.gotei()) сохраняет созданный экземпляр в базе данных и после успешного сохранения вызывает метод gotei для данного экземпляра. Таким образом, после сохранения будет выведено сообщение "Шинигами состоят в организации Готей 13".