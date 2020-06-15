const Pessoa = require('../Models/Pessoa')
const parseStringToArray = require('../Util/ParseString');

module.exports = {
    async index(request, response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        const PessoaRetorno = await Pessoa.find();
        return response.json(PessoaRetorno);
    },

    async getPessoa(request, response){
        let { cpf } = request.params;
        const PessoaRetorno = await Pessoa.find({ cpf : cpf});
        return response.json(PessoaRetorno);
    },

    async create(request, response){
        let { nome , cpf , email, hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const retornoPessoa = await Pessoa.create({
               nome,
               cpf,
               email ,
               hobies : vHobies
        });
        
        return response.json(retornoPessoa);
    },

    async edit(request, response){
        let { nome , cpf , email, hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const PessoaRetorno = await Pessoa.updateOne({cpf : cpf} , {$set: {nome : nome , email : email , hobies : vHobies}});
        return response.json(PessoaRetorno);
    },

    async addHobie(request, response){
        let { cpf } = request.params;
        let { hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const PessoaRetorno = await Pessoa.updateOne({cpf : cpf} , {$push: {hobies : vHobies }});
        return response.json(PessoaRetorno);
    },

    async delete(request, response){
        let { cpf } = request.body;
        const PessoaRetorno = await Pessoa.deleteOne({cpf : cpf});
        return response.json(PessoaRetorno);
    },    
}