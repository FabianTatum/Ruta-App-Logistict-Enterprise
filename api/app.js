const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const publicDir = express.static(`${__dirname}/public`);
const port = process.env.PORT || 5000;

const routes = require("./routes/index");

const app = express();

app
  .set("port", port)

  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev"))

  .use(routes);

module.exports = app;
