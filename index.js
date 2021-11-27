require('dotenv').config()
const express = require('express')
const restResponse = require('express-rest-response')
const app = express()
const options = {
  showStatusCode: true,
  showDefaultMessage: true,
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(restResponse(options))

app.get('/', (req, res) => {
  res.rest.success('Helo World')
})
app.get('/error', (req, res, next) => {
  throw new Error('Contoh error')
})
app.use('/api', require('./routes/api'))

app.use((req, res, next) => {
  let err = new Error('')
  err.code = 404
  next(err)
})
app.use((err, req, res, next) => {
  if (err.code == 404) {
    return res.rest.notFound('endpoint not found')
  }
  return res.rest.serverError(err.message)
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})
