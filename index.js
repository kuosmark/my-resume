const path = require('path')
const data = require('./Data')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())

app.get('/data', (request, response) => {
  response.json(data)
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
