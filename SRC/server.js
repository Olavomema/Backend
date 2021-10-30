var express = require('express')

var cors = require('cors')

var mongoose = require('mongoose')

var userrouter = require('./Routes/users')

var app = express()

app.use('/users', userrouter)

mongoose.connect('mongodb://localhost:27017/SG', function () {
    console.log('Banco de dados conectado')
})

app.listen(8000, function () {
    console.log('Escutando na porta 8000...')
})

