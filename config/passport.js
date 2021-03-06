var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs')
var db = require("../models");

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, function (email, password, done) {
            // Match User
            db.user.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, { message: 'That email is not registered' });
                }

                bcrypt.compare(password, user.password, function (err, isMatch) {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Password incorrect' })
                    }
                })
            }).catch(err => console.log(err))
        })
    )
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {

        db.user.findByPk(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });
}