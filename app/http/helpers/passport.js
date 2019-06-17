const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../../models')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  ((email, password, cb) => (
    User.findOne({ email, password })
      .then((user) => {
        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' })
        }

        return cb(null, user, { message: 'Logged In Successfully' })
      })
      .catch(err => cb(err))
  ))
))
