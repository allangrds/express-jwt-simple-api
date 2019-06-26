const passport = require('passport')

function validateToken (req, res, next) {
  return passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).send({
        error: 'Unauthorized',
      })
    }

    next()
  })(req, res, next)
}

module.exports = validateToken
