const express = require("express");
const users = require("./users");
const auth = require("./auth");
const groups = require("./cardgroups");
const cards = require("./cards");
const cors = require("cors");

const routes = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use("/users", users);
  app.use("/auth", auth);
  app.use("/groups", groups);
  app.use("/cards", cards);

  app.get("/", (req, res) => {
    res.send("Bem vindo a API");
  });
};

module.exports = routes;
