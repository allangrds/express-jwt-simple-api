'use strict'

const notes = require('./notes')

function route (app, db) {
  notes(app, db)
}

module.exports = route