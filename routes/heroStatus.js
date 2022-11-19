const express = require('express');
const recordRoutes = express.Router();

const dbo = require('../conn');

recordRoutes.route('/heroStatus').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('heroes')
    .find({})
    // .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching heroes!');
      } else {
        res.json(result);
      }
    });
});

module.exports = recordRoutes;