const express = require('express');
const app = require('./server/server');

app.use(express.json());

app.get("/api/ramen", (req, res) => {
  res.status(200).send("Access Success");
});