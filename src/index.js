const express = require('express')
const middleware = require('./middleware')
const routes = require('./routes')

const { PORT = 3001 } = process.env

const app = express()

middleware(app)
routes(app)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
