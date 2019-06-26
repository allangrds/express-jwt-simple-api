const errorHandler = require('./errorHandler')
const listen = require('./listen')
const routes = require('../routes')

function bootstrap (app) {
  routes(app)
  errorHandler(app)
  listen(app)
}

module.exports = bootstrap
