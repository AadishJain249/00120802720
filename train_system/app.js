const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
const gettoken = require("./gettoken");
const getTrain = require("./getTrain");
const list = require("./list");

app.get("/trains", async (req, res) => {
  // getting token from gettoken
  const token = await gettoken();
  const gettrain = await getTrain(token.access_token);
  res.send(list(gettrain, gettrain.length));
});
app.listen(port);
