const path = require('path')
const data = require('./Data')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())

app
  .get('/data', (req, res) => {
    res.json(data)
  })
  .catch((error) => {
    console.log(error)
    res.status(500)
  })

app
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
  })
  .catch((error) => {
    console.log(error)
    res.status(500)
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
