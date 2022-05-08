const express = require("express");
const bodyParser = require("body-parser");
const unifiedParams = require("./utils/unified-params");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const params = unifiedParams(req);
  res.json(params);
});

module.exports = app;
