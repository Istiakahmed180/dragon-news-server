const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/Categories.json");

app.get("/", (req, res) => {
  res.send("Istiak Ahmed Shawon");
});

app.use(cors());

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon News Project Server Running On Port:", port);
});
