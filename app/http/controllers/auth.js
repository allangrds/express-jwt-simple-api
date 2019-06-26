const jwt = require('jsonwebtoken')
const passport = require('passport')

class Auth {
  index (req, res) {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(401).send({
          error: 'Unauthorized',
        })
      }

      return req.login(user, { session: false }, (error) => {
        if (error) {
          res.status(401).send({
            error: 'Unauthorized',
          })
        }

        const token = jwt.sign(user, 'your_jwt_secret')

        return res.json({
          user: {
            name: user.name,
            email: user.email,
            created_at: user.createdAt,
            updated_at: user.updatedAt,
          },
          token,
        })
      })
    })(req, res)
  }
}

module.exports = Auth
