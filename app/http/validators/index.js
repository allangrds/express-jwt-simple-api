const { celebrate } = require('celebrate')

function validator (rules) {
  const obj = celebrate(
    rules,
    {
      abortEarly: false,
    }
  )

  return obj
}

module.exports = validator
