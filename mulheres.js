const express = require("express")
const router = express.Router()
const cors = require('cors') // estou trazendo o pacote cors que permite consumir essa API no front-end

const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

const Mulher = require('./mulherModel') // objeto mulher que está atrelada a lista de divas
//fazer teste com essa linha

const app = express()
const porta = 1212
app.use(express.json())
app.use(cors())
//GET

async function mostraMulheres(resquest, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.citacao) {
            mulherEncontrada = request.body.citacao
        }
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }

}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Mulher deletada com sucesso!' })
    } catch (erro) {
        console.log(erro)
    }

}


//PORTA
function mostraPorta() {
    console.log('Servidor esta rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.delete('/mulheres/:id', deletaMulher))


app.listen(porta, mostraPorta)

