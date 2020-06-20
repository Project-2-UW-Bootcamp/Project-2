var express = require("express");
var expressLayouts = require("express-ejs-layouts")
var flash = require('connect-flash')
var session = require('express-session')
var passport = require('passport')

var PORT = process.env.PORT || 5500;

var app = express();

require('./config/passport')(passport);

var db = require("./models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


// Serve static html from public directory
app.use(express.static("public"));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/threads', require('./routes/threads'))


//Sync Database
db.sequelize.sync().then(function() {

  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

// Initialize Server
app.listen(PORT, console.log(`Server started on ${PORT}`))