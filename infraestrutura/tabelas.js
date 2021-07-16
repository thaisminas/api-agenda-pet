class Tabelas {
    init(conexao) {
        this.conexao = conexao

    }


        criarAtendimento() {
            const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id in NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datatime NOT NULL, dataCriacao datatime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

            this.conexao.query(sql, erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Tabela Atendimentos criada com sucesso')
                }
            }
        )
    };
}

module.exports = new Tabelas