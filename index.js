const express = require("express");
const app = require("./server/server");
const knex = require("./knex");

app.use(express.json());

// GET: get shop info
app.get("/api/ramen", async (req, res) => {
  const limit = req.query.limit;
  if (limit !== undefined) {
    let results = await knex.select().table("ramen_yokohama");
    results = results.filter((result, index) => index < limit);
    res.send(results);
  } else {
    let results = await knex.select().table("ramen_yokohama");
    res.send(results);
  }
});
// GET: get info of a specific shop
app.get("/api/ramen/:id", async (req, res) => {
  let { id } = req.params;
  let results = await knex.select().table("ramen_yokohama");
  res.send(results.filter((result) => String(result.id) === id));
});
// POST: post 