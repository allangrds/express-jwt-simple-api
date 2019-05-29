'use strict'

require('dotenv').config()
const bodyParser = require('body-parser')
const express    = require('express')
const router     = require('./routes')

const PORT = 3000
const HOST = '127.0.0.1'

const app = express()

app.use(bodyParser.json())
app.listen(PORT, () => {
    console.log('We are live on ' + PORT)
})

router(app, {})