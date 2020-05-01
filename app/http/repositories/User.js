const { User } = require('../../models')
const BaseRepository = require('./Base')

const UserRepository = {
  getAll: (page) => {
    const attributes = [
      'id',
      'email',
      'createdAt',
      'updatedAt',
    ]

    return BaseRepository.getAll(User, page, attributes)
  },
}

module.exports = UserRepository
