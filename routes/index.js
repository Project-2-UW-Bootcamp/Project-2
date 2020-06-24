var express = require("express");
var router = express.Router();
var { ensureAuthenticated} = require('../config/auth')

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/dashboard", ensureAuthenticated, function(req, res) {
  var userData = {
    id: req.user.id,
    name: req.user.name
  }
  res.render("dashboard", { userData });
});

module.exports = router;