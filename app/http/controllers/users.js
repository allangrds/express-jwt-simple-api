const { User } = require('../../models')

class Users {
    async index(req, res) {
        // const user = await User.count()

        res.status(200).send('deu bom')
    }
}

module.exports = Users