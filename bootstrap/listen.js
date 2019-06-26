const PORT = 3000

function listen (app) {
  app.listen(PORT, () => {
    console.log(`We are live on ${PORT}`)
  })
}

module.exports = listen
