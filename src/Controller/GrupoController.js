const Grupo = require('../Models/Grupo');

module.exports = {
    async index(request, response){
        const GrupoRetorno = await Grupo.find();
        return response.json(GrupoRetorno);
    },
    async getGrupo(request, response){
        let { id } = request.params;
        const GrupoRetorno = await Grupo.find({ id : id});
        return response.json(GrupoRetorno);
    },
     
    async create(request, response){
        let { nomeGrupo , descricao , integrantes, imagem } = request.body;
        const GrupoRetorno = await Grupo.create({
               nomeGrupo,
               descricao,
               integrantes,
               imagem
        });
        
        return response.json(GrupoRetorno);
    },

    async edit(request, response){
        let { nomeGrupo , descricao , integrantes, imagem  } = request.body;
        const GrupoRetorno = await Grupo.updateOne({id : id} , {$set: { nomeGrupo : nomeGrupo , descricao : descricao, integrantes : integrantes, imagem : imagem}});
        return response.json(GrupoRetorno);
    },

    async delete(request, response){
        let { id } = request.body;
        const GrupoRetorno = await Grupo.deleteOne({id : id});
        return response.json(GrupoRetorno);
    },    
}