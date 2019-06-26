const express = require('express')
const AuthController = require('../app/http/controllers/auth')

const authInstance = new AuthController()
const router = express.Router()

router.post('/', (req, res) => authInstance.index(req, res))

module.exports = router
