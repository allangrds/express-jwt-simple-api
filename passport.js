const passport = require('passport')
const passportJWT = require('passport-jwt')
const bcrypt = require('bcryptjs')

const ExtractJWT = passportJWT.ExtractJwt

const LocalStrategy = require('passport-local').Strategy

const JWTStrategy = passportJWT.Strategy

const { User } = require('./app/models')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  ((email, password, cb) => (
    // Assume there is a DB module pproviding a global UserModel
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return cb(null, false, {
            message: 'Incorrect email or password.',
          })
        }

        return cb(null, user.dataValues, {
          message: 'Logged In Successfully',
        })
      })
      .catch((err) => {
        cb(err)
      })
  )
  )
))

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret',
  },
  ((jwtPayload, cb) => (
    // find the user in db if needed
    User.findOneById(jwtPayload.id)
      .then(user => cb(null, user))
      .catch(err => cb(err))
  )
  )
))
