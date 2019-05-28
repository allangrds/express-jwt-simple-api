'use strict'

const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = 'mysql'

const config = {
  username,
  password,
  database,
  host,
  dialect,
}

module.exports = config