var express = require('express')

var router = express.Router()

var usermodel = require('../Models/users')

router.get('/', async function (req, res){
    var users = await usermodel.find({})
    return res.send(users)
})

router.post('/', function (req, res){
    //verificação dos campos da requisição
      if (!req.body || !req.body.nome || !req.body.sobrenome || !req.body.email || !req.body.telefone || !req.body.celular || !req.body.senha){
          console.log(400)
          return res.sendStatus(400)
      }
      res.send(' ')
  })

module.exports = router