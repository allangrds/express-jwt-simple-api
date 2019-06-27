const bodyParser = require('body-parser')
const express = require('express')
const rateLimit = require('express-rate-limit')
const bootstrap = require('./bootstrap')

const app = express()

app.disable('x-powered-by')
app.use(bodyParser.json())

bootstrap(app)
