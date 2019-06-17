const paginate = require('../../models/helpers')

const BaseRepository = {
  getAll: async (model, page, attributes) => {
    const results = await model.findAll(paginate(
      {
        attributes,
      },
      {
        page: page || 1,
      }
    ))
    const total = await model.count()

    return {
      current_page: results.length ? page : 0,
      per_page: results.length || 0,
      results,
      total,
    }
  },
}

module.exports = BaseRepository
