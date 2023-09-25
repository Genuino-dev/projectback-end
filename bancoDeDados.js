//const { default: mongoose } = require('mongoose')//
const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){
   try {
    console.log('Conexao com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com o banco de dados feita com sucesso!')
   } catch(erro){
        console.log(erro)
   }
}

module.exports = conectaBancoDeDados // criando o modulo para permissao da utilização desse codigo em outro arquivo para organizar o meu cod


