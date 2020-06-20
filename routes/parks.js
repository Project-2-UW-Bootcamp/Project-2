var db = require("../models");
module.exports = function(app){
app.post("/maps/api", function(req, res){
    db.Parks.findOne({
        where: {
            parkID: req.body.parkID
        }
    }).then(function(park){
        if(!park){
            db.Parks.create(req.body).then(function(newPark){
                console.log(newPark);
            })
        }
    })
})
};

 
