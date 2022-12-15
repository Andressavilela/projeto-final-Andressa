const mongoose = require('mongoose')

const empreendedoresSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },

    telefone: {
        type: Number,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    bairro: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true

    },

    servicos: {
        type: String,
        required: true

    }

})

module.exports = mongoose.model('empreendedores', empreendedoresSchema)

