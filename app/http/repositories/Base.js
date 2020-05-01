const paginate = require('../../models/helpers')

const BaseRepository = {
  getAll: async (model, page, attributes) => {
    const reqPage = page || 1
    const results = await model.findAll(paginate(
      {
        attributes,
      },
      {
        page: reqPage,
      }
    ))
    const total = results.length ? await model.count() : 0

    return {
      current_page: results.length ? reqPage : 0,
      per_page: results.length || 0,
      results,
      total,
    }
  },
}

module.exports = BaseRepository
