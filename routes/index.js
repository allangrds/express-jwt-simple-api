const validateToken = require('../app/http/helpers/auth')
const users = require('./users')
const auth = require('./auth')

function routes (app) {
  app.use(
    '/users',
    (req, res, next) => validateToken(req, res, next),
    users
  )

  app.use(
    '/auth',
    auth
  )
}

module.exports = routes
