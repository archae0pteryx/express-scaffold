const morgan = require('morgan')
const BodyParser = require('body-parser')

const bearer = require('./bearer')

module.exports = (app) => {
  app.use(bearer)
  app.use(morgan('tiny'))
  app.use(BodyParser.json())
  app.use(BodyParser.urlencoded({ extended: true }))
}
