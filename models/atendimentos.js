const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adiciona(Atendimento){
        const sql = 'INSERT INTO atendimentos SER ?'

        conexao.query(sql, Atendimento, (erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Atendimento