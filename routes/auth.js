const express = require('express')
const Auth = require('../app/http/controllers/auth')

const router = express.Router()

router.post('/', (req, res) => Auth.index(req, res))

module.exports = router
