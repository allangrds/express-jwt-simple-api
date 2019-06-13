const paginate = (query, { page }) => {
  const limit = 10
  const offset = (page * limit) - limit

  return {
    ...query,
    limit,
    offset,
  }
}

module.exports = paginate
