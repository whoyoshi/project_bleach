const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Bleach = mongoose.model('Bleach', { name: String });

const shinigami = new Bleach({ name: 'Шинигами' });
shinigami.save().then(() => console.log('Бог смерти'));

//данный код выполняет следующие операции:
// - Подключается к базе данных MongoDB.
// - Определяет модель Bleach с одним полем.
// - Создает новый экземпляр модели с именем "Шинигами".
// - Сохраняет созданный экземпляр в базу данных и выводит сообщение после сохранения.