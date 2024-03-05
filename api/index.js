import express from 'express'
const app = express()
const port = 4000

//Efetuaremos o parse do JSON
app.use(express.json())

//Rotas de conteúdo público
app.use('/', express.static('public'))

//Primeira rota pública
app.get('/api', (req, res)=> {
    res.status(200).json({message: 'API ok!', version: '1.0'})
})

//Tratar rotas inválidas
app.use(function (req, res){
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe!`,
            param: `invalid route`
        }]
    })
})

//ouvidor / listen
app.listen(port, function(){
    console.log(`Servidor rodando em ${port}`)
})