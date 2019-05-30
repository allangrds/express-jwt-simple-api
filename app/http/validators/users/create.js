const { Joi }   = require('celebrate')
const validator = require('../index')

const rules = {
    body: Joi.object().keys({
        name: Joi
            .string()
            .required()
            .min(2)
            .max(40),
        email: Joi
            .string()
            .required()
            .min(5)
            .max(40),
        password: Joi
            .string()
            .required()
            .min(6)
            .max(12),
    }),
}

const validationResult = validator(rules)

module.exports = validationResult
