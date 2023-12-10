var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data                //Подключим модуль data.js в файле createDB.js
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
  try {
    await client.connect();
    var database = client.db("bleachDB");
    database.dropDatabase()
    database = client.db("bleachDB");
    const bleaches = database.collection("bleaches");
    const result = await bleaches.insertOne({name:"Блич"});
    console.log(`${result} documents were inserted`);
  } finally {
    await client.close();
  }
}
run()