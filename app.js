// app.js
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connection = require("./connection");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.post("/", (req, res) => {
  if (req.body.url && req.body.titre) {
    res.status(201).json({ id: 1, url: req.body.url, title: req.body.titre });
  } else {
    res.status(422).send;
  }
});

module.exports = app;
