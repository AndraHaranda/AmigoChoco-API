const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    nome : String,
    cpf  : String,
    email :String,
    estadoCivil : String,
    hobies : [String],
    cursosMatriculados : [
        {
            _id : {type: mongoose.Schema.Types.ObjectId, ref: 'Curso'}
        }
    ]
});

PessoaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Pessoa', PessoaSchema)


