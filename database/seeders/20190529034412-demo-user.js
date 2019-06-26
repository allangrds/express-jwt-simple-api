
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface) => {
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync('123456', salt)

    return queryInterface.bulkInsert('Users', [{
      name: 'Allan',
      email: 'allan@ramos.com',
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
}
