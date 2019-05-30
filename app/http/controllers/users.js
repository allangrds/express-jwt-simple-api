const { User } = require('../../models')

class Users {
  async index (req, res) {
    // TODO ver se é possivel definiri campos vísiveis/invisíveis
    const users = await User.findAll({
      attributes: [
        'id',
        'email',
        'createdAt',
        'updatedAt',
      ],
    })

    res.status(200).send({ users })
  }
}

module.exports = Users
