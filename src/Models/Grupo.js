const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const GrupoSchema = new mongoose.Schema({
    nomeGrupo : String,
    descricao : String,
    integrantes : [String],
    imagem: String

});

GrupoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Grupo', GrupoSchema)