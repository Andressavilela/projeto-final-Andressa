const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    usuario: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    produtos_desapego: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
        required: false
    },

    genero: {
        type: String,
        required: false
    },

    descricao: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("produtos", produtosSchema)