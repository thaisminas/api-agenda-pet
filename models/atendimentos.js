const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(Atendimento){
        const dataCriacao = new Date()
        const data = moment(Atendimento.data).format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
            if(erro){
                console.log(erro)
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento;