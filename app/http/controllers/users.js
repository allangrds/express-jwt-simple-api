// const { User } = require('../../models')
// const paginate = require('../../models/helpers')
const User = require('../repositories/User')

class Users {
  async index (req, res) {
    const { page = 1 } = req.params
    const users = await User.getAll(page)

    res.status(200).send({
      ...users,
    })
  }
}

module.exports = Users
