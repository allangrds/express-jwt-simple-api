require('./app/http/helpers/passport')

const bodyParser = require('body-parser')
const { omit, pathOr } = require('ramda')
const express = require('express')
const routes = require('./routes')
const validateToken = require('./app/http/helpers/auth')

const PORT = 3000

const app = express()

app.disable('x-powered-by')
app.use(bodyParser.json())

app.use(
  '/users',
  (req, res, next) => validateToken(req, res, next),
  routes.users
)

app.use(
  '/auth',
  routes.auth
)

app.use((err, req, res) => {
  const errorsList = pathOr([], ['joi', 'details'], err)
  const errors = errorsList.map(item => omit(['context'], item))

  if (errors.length > 0) {
    res.status(400).send({ errors })
  }
})

app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})
