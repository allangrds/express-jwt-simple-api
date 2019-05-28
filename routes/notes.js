'use strict'

const Notes = require('../app/http/controllers/notes')
const notesController = new Notes()

function notes (app, db) {
    app.get('/notes', (req, res) => notesController.index(req, res));
}

module.exports = notes