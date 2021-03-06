const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
const db = require("../db/db");
const _app_folder = process.env.siteroot || 'dashboard';

// collect request info
var requests = [];

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
app.set("view engine", "ejs");
dotenv.config();
const port = process.env.port || 8080;
const projectName = process.env.projectName;
const projectApi = process.env.projectApi;

let server = {};

app.use(function(req, res, next) {
  next();
});
app.use("/api", require("./index"));
const routes = require("../routes");
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});
app.get("/api-docs", function(req, res) {
  var locals = {
    title: projectName,
    server: projectApi,
    routes: routes
  };
  res.render("api", locals);
});
// ---- SERVE STATIC FILES ---- //
app.get("*.*", express.static(_app_folder, { maxAge: "1y" }));

// ---- SERVE APLICATION PATHS ---- //
app.all("*", function(req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});
//
// ─── START SERVER ───────────────────────────────────────────────────────────────
//

server.init = function() {
  app.listen(port, "0.0.0.0", () => {
    db();

    console.log(`Server is listening  on : ${port}`);
  });
};

//
// ─── MOUDLE EXPORT ──────────────────────────────────────────────────────────────
//

module.exports = server;
