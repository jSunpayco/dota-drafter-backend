const {Router} = require('express')
// import express from "express";
const express = require('express')
const router = express.Router();
const dbo = require('../dbConn.ts');

router.route('/heroStatus').get(async function (_req, callback) {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection('heroes')
      .find({})
      // .limit(50)
      .toArray(function (err, result) {
        if (err) {
          callback.status(400).send('Error fetching listings!');
        } else {
          callback.json(result);
        }
      });
  });

module.exports = router;