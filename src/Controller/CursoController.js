const Curso = require('../Models/Curso');

module.exports = {
    async index(request, response){
        const CursoRetorno = await Curso.find();
        return response.json(CursoRetorno);
    },
    async getCurso(request, response){
        let { cpf } = request.params;
        const CursoRetorno = await Curso.find({ cpf : cpf});
        return response.json(CursoRetorno);
    },
     
    async create(request, response){
        let { nomeCurso , descricao , aulas, imagem } = request.body;
        const CursoRetorno = await Curso.create({
               nomeCurso,
               descricao,
               aulas,
               imagem
        });
        
        return response.json(CursoRetorno);
    },

    async edit(request, response){
        let { nomeCurso , descricao, imagem } = request.body;
        const CursoRetorno = await Curso.updateOne({id : id} , {$set: { nomeCurso : nomeCurso , descricao : descricao, imagem : imagem}});
        return response.json(CursoRetorno);
    },

    async delete(request, response){
        let { id } = request.body;
        const CursoRetorno = await Curso.deleteOne({id : id});
        return response.json(CursoRetorno);
    },    
}