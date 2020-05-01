const express = require('express')
const Users = require('../app/http/controllers/users')

const router = express.Router()

router.get('/', (req, res) => Users.index(req, res))

module.exports = router
