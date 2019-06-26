const express = require('express')
const Users = require('../app/http/controllers/users')

const router = express.Router()
const usersController = new Users()

router.get('/', (req, res) => usersController.index(req, res))

module.exports = router
