const Pessoa = require('../Models/Pessoa')

module.exports = {
    async matricular(request, response){
        let { cpf } = request.params;
        let { cursosMatriculados  } = request.body;
        const PessoaResposta = await Pessoa.update({ cpf : cpf }, { $push : { cursosMatriculados : cursosMatriculados }});
        return response.json(PessoaResposta);
    },

    async cursosMatriculados(request, response){
        let { cpf } = request.params;
        const PessoaResposta = await Pessoa.aggregate([
            {  $match : { cpf : cpf }},
            {
               $lookup:
               {
                 from: "cursos",
                 localField: "cursosMatriculados._id",
                 foreignField: "_id",
                 as: "cursosMatriculados"
               }
            }
            ]);
            return response.json(PessoaResposta);        
    }
}