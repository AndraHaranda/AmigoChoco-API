const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const CursoSchema = new mongoose.Schema({
    nomeCurso : String,
    descricao : String,
    aulas : [{
        nroAula : Number,
        nomeAula : String,        
    }],
    imagem: String
});

CursoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Curso', CursoSchema)