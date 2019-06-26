
const { omit, pathOr } = require('ramda')
const users = require('./users')
const auth = require('./auth')

function route (app, db) {
  users(app, db)
  auth(app, db)

  app.use((err, req, res, next) => {
    const errorsList = pathOr([], ['joi', 'details'], err)
    const errors = errorsList.map(item => omit(['context'], item))

    if (errors.length > 0) {
      res.status(400).send({ errors })
    }
  })
}

module.exports = route
