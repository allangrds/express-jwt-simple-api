
const bcrypt = require('bcrypt-nodejs')

const salt = bcrypt.genSaltSync()

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    name: 'Allan',
    email: 'allan@ramos.com',
    password: bcrypt.hashSync(123456, salt),
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
}
