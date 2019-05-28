const { User } = require('../../models')

class Notes {
    async index(req, res) {
        const user = await User.count()

        res.status(200).send(user)
    }
}

module.exports = Notes