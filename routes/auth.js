const AuthController = require('../app/http/controllers/auth')

const authInstance = new AuthController()

function auth (app, db) {
  app.post(
    '/auth',
    (req, res) => authInstance.index(req, res)
  )
}

module.exports = auth
