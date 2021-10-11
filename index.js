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
// POST: post new shop info
app.post("/api/ramen", async (req, res) => {
  let info = req.body;
  await knex('ramen_yokohama').insert(info);

  let results = await knex.select().table("ramen_yokohama");
  res.send(results.filter((result) => result.shop_name_jp === info.shop_name_jp));
  res.send(results);
});
// PATCH: patch specified shop info
app.patch("/api/ramen/:id", async (req, res) => {
  let { id } = req.params;
  let info = req.body;
  await knex('ramen_yokohama').where('id', id).update(info);
  
  let results = await knex.select().table("ramen_yokohama");
  res.send(results.filter((result) => String(result.id) === id));
  res.send(results);
});
// DELETE: delete specified shop info
app.delete("/api/ramen/:id", async (req, res) => {
  let { id } = req.params;
  await knex('ramen_yokohama').where('id', id).del();
  
  let results = await knex.select().table("ramen_yokohama");
  res.send(results);
});