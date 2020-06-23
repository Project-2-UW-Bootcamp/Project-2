var db = require("../models");

module.exports = function(app){
app.post("/threads/api", function(req, res) {
  var id = req.body.park_id
  
  db.threads.findOne({
    where: {
      ParkId: id
    },
    include: [db.Parks]
  }).then(function(response){
    var message = { message: 'There are no threads for this dog park yet'}
    if(!response){
      res.json(message.message)
    }
  })
})

app.get("/dashboard/:park_id", function(req, res){
  var id = req.params.park_id
  
  db.threads.findOne({
    where: {
      ParkId: id
    },
    include: [db.Parks]
  }).then(function(response){
    if(!response){
      var message = 'There are no threads for this dog park yet'
      res.render("dashboard", { message })
    }
  })
})
}



