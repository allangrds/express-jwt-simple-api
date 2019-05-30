'use strict'

const Users                = require('../app/http/controllers/users')
const usersCreateValidator = require('../app/http/validators/users/create')
const usersController      = new Users()

function users (app, db) {
    // app.post(
    //     '/users',
    //     usersCreateValidator,
    //     (req, res) => usersController.index(req, res)
    // );
    app.get(
      '/users',
      (req, res) => usersController.index(req, res)
  );
}


module.exports = users
