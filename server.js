require('./app/http/helpers/passport')

const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes')

const PORT = 3000

const app = express()

app.disable('x-powered-by')
app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})

router(app, {})
