const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(Atendimento, res){
        const dataCriacao = new moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(Atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = Atendimento.cliente.length >= 5


        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem:'Data deve ser maior ou igual a data atual '
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existeErros){
            res.status(400).json(erros)
        } else {

            const atendimentoDatado = {...Atendimento, data, dataCriacao }
            const sql = 'INSERT INTO atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
                if(erro){
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }
    }
}

module.exports = new Atendimento;