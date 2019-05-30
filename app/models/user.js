const bcrypt = require('bcrypt-nodejs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {})

  User.beforeCreate(async (user) => {
    user.createdAt = new Date()
    user.updatedAt = new Date()
    user.password = await user.generatePasswordHash()
  })

  User.beforeUpdate((user) => {
    user.updatedAt = new Date()
  })

  User.prototype.generatePasswordHash = () => {
    const saltRounds = 10
    return bcrypt.hash(this.password, saltRounds)
  }

  return User
}
