const { MongoClient } = require('mongodb');
const myConnectionString = process.env.mongoURI;
const myClient = new MongoClient(myConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let myConn;

module.exports = {
  connectToServer: function (callback) {
    myClient.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      myConn = db.db('dotaDrafter');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return myConn;
  },
};