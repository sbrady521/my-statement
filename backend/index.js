const express = require('express')
const bodyParser = require('body-parser')
const gbRoutes = require('./routes/gbRoutes')

const app = express()
app.use(bodyParser.json())
app.get('/hello', (req, res) => {
  res.send('hello')
})
gbRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
