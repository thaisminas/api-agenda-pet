//Controllers responsavel pelas rotas
const atendimentos = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos");

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        atendimento.lista(res)
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        res.send('OK')
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('atendimento/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}

