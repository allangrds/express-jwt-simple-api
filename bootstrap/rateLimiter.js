const rateLimit = require('express-rate-limit')

function rateLimiter (app) {
  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: { error: 'Too many requests, please try again later.' },
  })

  app.use(limiter)
}

module.exports = rateLimiter
