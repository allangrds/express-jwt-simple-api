'use strict'

const database = process.env.DB_DATABASE || 'sandbox'
const username = process.env.DB_USERNAME || 'sandbox'
const password = process.env.DB_PASSWORD || 'sandbox'
const host = process.env.DB_HOST || 'sandbox-mysql'
const dialect = process.env.DB_CONNECTION || 'mysql'

const config = {
  username,
  password,
  database,
  host,
  dialect,
}

module.exports = config