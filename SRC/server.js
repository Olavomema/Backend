var express = require('express')

var cors = require('cors')

var mongoose = require('mongoose')

var userrouter = require('./Routes/users')

var app = express()

mongoose.connect('mongodb://localhost:27017/SG', function () {
    console.log('Banco de dados conectado')
})
app.use(cors())
app.use(express.json())
app.use('/users', userrouter)

app.listen(8000, function () {
    console.log('Escutando na porta 8000...')
})

