const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Helloo World')
})

app.listen(3000)
