const { MongoClient } = require("mongodb");
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const routes = require('./routes');
const dbo = require('./dbConn.ts');

const connectionString = process.env.mongoURI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express()
app.use(cors());
app.use(express.json());
app.use(require('./routes/hero_status.ts'));

app.use('/', routes);

dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

app.get('/', function(req, res) {
  res.send('Connected');
});

app.get("/heroStatus", function (req, res) {
  res.render("./routes/hero_status.ts");
});

// https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial