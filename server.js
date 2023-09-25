const express = require("express")
const router = express.Router()


const app = express()
const porta = 1212


function mostraPorta() {
    console.log('Servidor esta rodando na porta', porta)
}

app.listen(porta, mostraPorta)