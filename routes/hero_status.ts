const {Router} = require('express')
// import express from "express";
const express = require('express')
const router = express.Router();
const dbo = require('../dbConn.ts');

router.route('/heroStatus').get(async function (_req, res) {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection('heroes')
      .find({})
      // .limit(50)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send('Error fetching listings!');
        } else {
          res.json(result);
        }
      });
  });

module.exports = router;