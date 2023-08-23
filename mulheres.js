const express = require("express") 
const router = express.Router()
const app = express() 
const porta = 1212

const mulheres = [
    {
        nome: 'Isabella Cristina Genuino',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora back-end'

    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/0/1563116714583?e=1698278400&v=beta&t=5PS4RGMHQSB7_pvW_K9Bp6Dg9njghRhtZS_HXe1nVGE',
        minibio: "Desenvolvedora de software e instrutora"
    },
    {  
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_800_800/0/1686007267293?e=1698278400&v=beta&t=y80pztXCzDD3UYjhOsazN6IDT_k-VqhBxxK9OAbfQOs',
        minibio : 'CEO & Founde PrograMaria'
    }
]

function mostraMulheres(resquest, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor esta rodando na porta', porta)
}
app.use(router.get('/mulheres', mostraMulheres))

app.listen(porta, mostraPorta)

