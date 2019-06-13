const { User } = require('../../models')
const paginate = require('../../models/helpers')

class Users {
  async index (req, res) {
    // TODO ver se é possivel definiri campos vísiveis/invisíveis
    // TODO ver se dá pra reduzir paginação
    // TODO ver se dá pra inserir o método "pagination" em algum lugar do sequelize
    const page = req.param('page') || 1
    const users = await User.findAll(paginate(
      {
        attributes: [
          'id',
          'email',
          'createdAt',
          'updatedAt',
        ],
      },
      {
        page,
      }
    ))
    const total = await User.count()

    res.status(200).send({
      current_page: req.param('page'),
      per_page: users.length || 0,
      users,
      total,
    })
  }
}

module.exports = Users
