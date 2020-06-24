var express = require("express");
var router = express.Router();
var db = require("../models");
var bcrypt = require("bcryptjs");
var passport = require("passport");
var { ensureAuthenticated} = require('../config/auth')


// Register Page
router.get('/register', function(req, res) {
  res.render('register')
})

// Login Page
router.get('/login', function(req, res) {
  res.render('login')
})


// Dashboard Page
router.get("/dashboard", function(req, res) {
  res.render("dashboard");
});

// Profile Page
router.get("/profile/:id", ensureAuthenticated, function(req, res) {
  var id = req.params.id
  console.log(id)
  var user_name = req.user.name
  user_name = user_name + "'s"
  var user_data = {
    name: user_name,
    id: req.user.id
  }
  console.log(user_name)
  res.render("profile", { user_data })
});


// Hangle Register
router.post("/register", function(req, res) {
  var name = req.body.name;

  var email = req.body.email;

  var password = req.body.password;

  var password2 = req.body.password2;

  var errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
    console.log(errors);
  } else {
    db.user
      .findOne({
        where: {
          email: email
        }
      })
      .then(function(user) {
        if (user) {
          errors.push({ msg: "Email is already registered" });
          res.render("register", {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          var newUser = {
            name,
            email,
            password
          };
          console.log(newUser);
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, function(err, hash) {
              if (err) {
                throw err;
              }

              newUser.password = hash;
              db.user
                .create({
                  name: name,
                  email: email,
                  password: hash
                })
                .then(function() {
                  req.flash(
                    "success_message",
                    "You are now registered and can log in"
                  );
                  res.redirect("login");
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
  }
});

// Login Handle
router.post("/login", function(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

// Logout handle
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success_msg", "You are now logged out");
  res.redirect("/users/login");
});

router.put("/api", function(req, res){
  db.user.update({
    firstname: req.body.first_name,
    lastname: req.body.last_name,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  }, { 
    where: {
    id: req.body.id
    }
  }).then(function(data){
    
  })
})

module.exports = router;
