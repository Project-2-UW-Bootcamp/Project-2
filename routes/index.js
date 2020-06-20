var express = require("express");
var router = express.Router();
var { ensureAuthenticated} = require('../config/auth')

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/dashboard", ensureAuthenticated, function(req, res) {
  res.render("dashboard");
});

module.exports = router;
