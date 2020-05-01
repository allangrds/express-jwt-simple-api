function timeout (app) {
  app.use((req, res, next) => {
    res.setTimeout(1000, () => {
      res.status(408).send({
        error: 'Connection timeout!',
      })
    })

    next()
  })
}

module.exports = timeout
