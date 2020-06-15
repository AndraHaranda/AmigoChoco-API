const Pessoa = require('../Models/Pessoa');
const jwt = require('jsonwebtoken')

module.exports = {
    async geraToken(request, response){

        let { cpf, senha } = request.params;
        const PessoaRetorno = await Pessoa.findOne({ cpf : cpf});
        const token = jwt.sign({_id: PessoaRetorno._id}, process.env.JWT_KEY, { expiresIn: 300});
        return response.send({auth : true,  token : token});
    }
}