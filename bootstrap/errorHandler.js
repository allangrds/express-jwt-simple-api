const { omit, pathOr } = require('ramda')

function errorHandler (app) {
  app.use((err, req, res) => {
    const errorsList = pathOr([], ['joi', 'details'], err)
    const errors = errorsList.map(item => omit(['context'], item))

    if (errors.length > 0) {
      res.status(400).send({ errors })
    }
  })
}

module.exports = errorHandler
