const routes = require("../routes");
var express = require("express");
var router = express.Router();

routes.forEach(element => {
  if (element.method == "get") {
    router.get(element.path, element.controller);
  }
  if (element.method == "post") {
    router.post(element.path, element.controller);
  }
  if (element.method == "put") {
    router.put(element.path, element.controller);
  }

  if (element.method == "delete") {
    router.delete(element.path, element.controller);
  }
});

module.exports = router;
