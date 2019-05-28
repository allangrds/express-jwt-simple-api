module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        hooks: {
            beforeCreate: function (user, options, fn) {
                user.createdAt = new Date()
                user.updatedAt = new Date()

                fn(null, user)
            },
            beforeUpdate: function (user, options, fn) {
                user.updatedAt = new Date()

                fn(null, user)
            }
        }
    })

    return User
}