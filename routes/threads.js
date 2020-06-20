var express = require("express");
var router = express.Router();
var db = require("../models");

router.get('/thread_id/:id', function(req, res) {
  var id = req.params.id
  console.log(id)

  db.Parks.findAll({
    where: id
  }).then(function(data) {
    console.log(data)
  })
})

module.exports = router;