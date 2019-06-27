const errorHandler = require('./errorHandler')
const listen = require('./listen')
const rateLimiter = require('./rateLimiter')
const routes = require('../routes')
const timeout = require('./timeout')

function bootstrap (app) {
  timeout(app)
  rateLimiter(app)
  routes(app)
  errorHandler(app)
  listen(app)
}

module.exports = bootstrap
