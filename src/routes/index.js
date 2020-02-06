const express = require('express')

module.exports = app => {
  const apiRouter = express.Router()

  require('./heartbeat')(apiRouter)

  app.use('/api', apiRouter)

  app.get('*', (req, res) => {
    res.send('bad route')
  })
}
