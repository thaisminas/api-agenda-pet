const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res){
        const query = 'INSERT INTO PETS SET?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho)=> {
            if(erro){
                res.status(400).json({erro})
            }
            const novoPet = {
                nome: pet.nome,
                imagem: novoCaminho
            }
            conexao.query(query, novoPet, erro => {
                if(erro){
                    console.log(erro)
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(novoPet)
                }
            })
        })

    }
}

module.exports = new Pet()