const User = require('../repositories/User')

async function index (req, res) {
  const { page } = req.query
  const users = await User.getAll(page)

  res.status(200).send({
    ...users,
  })
}

module.exports = { index }
