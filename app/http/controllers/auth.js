const jwt = require('jsonwebtoken')
const passport = require('passport')
require('dotenv').config()

function index (req, res) {
  passport.authenticate('local', { session: false }, (err, userData) => {
    if (err || !userData) {
      return res.status(401).send({
        error: 'Unauthorized',
      })
    }

    return req.login(userData, { session: false }, (error) => {
      if (error) {
        res.status(401).send({
          error: 'Unauthorized',
        })
      }

      const user = {
        name: userData.name,
        email: userData.email,
        created_at: userData.createdAt,
        updated_at: userData.updatedAt,
      }

      const token = jwt.sign(
        user,
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_LIFETIME,
        }
      )

      return res.json({
        user,
        token,
      })
    })
  })(req, res)
}

module.exports = { index }
