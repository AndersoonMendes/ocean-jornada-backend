const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Helloo World')
})

app.get('/oi', function(req, res){
   res.send('Olá Mundo')
})

//Lista de Personagens
const lista = ['Saitama', 'Genos', 'King']

//read all -> (get)/item
app.get('/item', function(req, res){
  res.send(lista)
})

app.listen(3000)
