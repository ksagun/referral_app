const express = require("express");
const listRoutes = require("express-list-endpoints");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const http = require("http");
const https = require("https");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

http.createServer(app).listen(port, () => {
  console.log(`API listening at port ${port}`);
  routes(listRoutes(app));
});

const routes = (routes) => {
  routes.forEach((route) => {
    if (route.methods.length > 0 && route.path) console.log(route.methods[0] + " - " + route.path);
  });
};
