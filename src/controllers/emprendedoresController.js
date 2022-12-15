const emprendedoresSchema = require('../models/emprendedoresSchema');
const mongoose = require("mongoose");

const criarCadastroEmpreendedores = async (req, res) => {
    const { empresa, telefone, endereco, bairro, servicos, categoria } = req.body

    if (!empresa) {
        return res.status(400).send({
            message: "Nome da empresa necessário para cadastro."
        })
    }

    if (!telefone) {
        return res.status(400).send({
            message: "Telefone necessário para cadastro."
        })
    }

    if (!endereco) {
        return res.status(400).send({
            message: "Endereço necessário para cadastro."
        })
    }

    if (!bairro) {
        return res.status(400).send({
            message: "Bairro necessário para cadastro."
        })
    }

    if (!servicos) {
        return res.status(400).send({
            message: "Serviço necessário para cadastro."
        })
    }

    if (!categoria) {
        return res.status(400).send({
            message: "Categoria necessário para cadastro."
        })
    }

    try {

        const buscarTelefone = await emprendedoresSchema.find({ telefone })

        if (buscarTelefone.length !== 0) {
            return res.status(400).json({ Cadastro_emprendedores: `Número de telefone já cadastrado!` });
        }

        const cadastro = new emprendedoresSchema({
            empresa: empresa,
            telefone: telefone,
            endereco: endereco,
            bairro: bairro,
            servicos: servicos,
            categoria: categoria

        })


        const salvarCadastro = await cadastro.save()

        res.status(201).json({
            cadastro: salvarCadastro,
            message: "cadastro efetuado com sucesso"
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const buscarEmprendedoresPorId = async (req, res) => {

    try {
        const empreendedores = await emprendedoresSchema.findById(req.params.id)
        res.status(200).json(empreendedores);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const buscarTodosEmprendedores = async (req, res) => {
    const { emprendedores } = req.query;

    let query = {};

    if (emprendedores) query.emprendedores = new RegExp(emprendedores, 'i')

    try {
        const emprendedores = await emprendedoresSchema.find(query);
        res.status(200).json({
            message: "Lista de emprendedores",
            emprendedores
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const atualizarEmprendedores = async (req, res) => {

    const { empresa, telefone, endereco, bairro, servicos, categoria } = req.body

    try {
        const encontraPorId = await emprendedoresSchema.findById(req.params.id)
        if (!encontraPorId) {
            return res.status(404).send({
                message: "Nenhum emprendedor encontrado para o id buscado!"
            })
        }

        encontraPorId.empresa = empresa || encontraPorId.empresa
        encontraPorId.telefone = telefone || encontraPorId.telefone
        encontraPorId.endereco = endereco || encontraPorId.endereco
        encontraPorId.bairro = bairro || encontraPorId.bairro
        encontraPorId.servicos = servicos || encontraPorId.servicos
        encontraPorId.categoria = categoria || encontraPorId.categoria

        const cadastroAtualizado = await encontraPorId.save()

        res.status(200).json({
            message: "Projeto atualizado com sucesso!",
            projeto: cadastroAtualizado
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const deletarCadastro = async (req, res) => {
    try {
        const buscarEmprendedoresPorId = await emprendedoresSchema.findById(req.params.id)

        if (!buscarEmprendedoresPorId) {
            return res.status(404).send({
                message: "Nenhum cadastro encontrado para o produto buscado"
            })
        }

        await buscarEmprendedoresPorId.delete()

        res.status(200).send({
            message: "Cadastro removido"
        })

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}



module.exports = {
    criarCadastroEmpreendedores,
    buscarTodosEmprendedores,
    buscarEmprendedoresPorId,
    deletarCadastro,
    atualizarEmprendedores
};
