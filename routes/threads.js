var db = require("../models");
var { ensureAuthenticated} = require('../config/auth')

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

app.get("/dashboard/:park_id", ensureAuthenticated, function(req, res){
  var id = req.params.park_id
  
  db.threads.findAll({
    where: {
      ParkParkID: id
    },
    include: [db.Parks, db.user]
  }).then(function(response){
    if(response.length < 1){
      var message = 'There are no threads for this dog park yet'
      var data = []
      data.push(message)
      data.push(id)
      res.render("dashboard", { data })
    }else{
      var renderArr = []
      for (var i = 0; i < response.length; i ++){
        var renderData = {
          name: response[i].dataValues.Park.dataValues.name,
          address: response[i].dataValues.Park.dataValues.address,
          username: response[i].dataValues.user.name,
          text: response[i].dataValues.text,
          posted: response[i].dataValues.user.createdAt
        }
        renderArr.push(renderData)
      }
      
      console.log('yfdfdfdfd', renderArr)
    res.render("dashboard", { renderArr })
    }
  })
})

app.post("/newthread/api", function(req, res){
  var id = req.body.ParkId
  var thread_text = req.body.text

  console.log(id, thread_text)
  console.log(req.user.id)

  db.threads.create({
    ParkParkID: id,
    text: thread_text,
    userId: req.user.id
  }).then(function(dbthreads) {
    res.json(dbthreads);
  });

})


}



