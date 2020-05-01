const cors = require('cors')

function enableCors (app) {
  app.use(cors())
}

module.exports = enableCors
