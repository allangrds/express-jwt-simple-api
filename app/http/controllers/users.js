const User = require('../repositories/User')

class Users {
  async index (req, res) {
    const { page } = req.query
    const users = await User.getAll(page)

    res.status(200).send({
      ...users,
    })
  }
}

module.exports = Users
