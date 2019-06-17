const bodyParser = require('body-parser')
const express = require('express')
const timeout = require('connect-timeout')
const router = require('./routes')
require('./app/http/helpers/passport')

const PORT = 3000

const app = express()

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

app.use(timeout('10'))
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(haltOnTimedout)
app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})

router(app, {})
