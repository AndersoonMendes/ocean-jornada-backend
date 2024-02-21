const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Helloo World')
})

app.get('/oi', function(req, res){
   res.send('Olá Mundo')
})

//Lista de Personagens
const lista = ['Saitama', 'Genos', 'King', 'Cavaliro sem Licença', 'Tornado', 'Silver Fang', 'Metal Bat']
//   ids:             0     1         2               3                 4          5               6   
//read all -> (get)/item
app.get('/item', function(req, res){
  res.send(lista)
})

//read by id -> (get)/item/:id
app.get('/item/:id', function(req, res){
  const id = req.params.id

  //acessa o item na lista baseaddo no id recebido
  const item = lista[id]

  //envio do item obtido atrasves do id na lista
  res.send(item)
})

//sinalizando que o body esta em json
app.use(express.json())

//create -> (post)/item
app.post('/item', function(req, res){
  //extraindo o corpo da requisição
  const body = req.body

  //pegamos a string(nome) que foi enviado no body
  const item = body.nome

  //adiciona um nome dentro da lista
  lista.push(item)

  res.send('item adicionado com sucesso')
})

app.listen(3000)
