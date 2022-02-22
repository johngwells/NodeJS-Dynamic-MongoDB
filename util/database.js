const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

require('dotenv').config();

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://johnwells:${process.env.DB_PASS}@cluster0.juqek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
