const produtosSchema = require('../models/produtosSchema');
const mongoose = require("mongoose");

const criarCadastroProdutos = async (req, res) => {
    const { nome, telefone, produtos_desapego, tamanho, genero, descricao } = req.body

    if (!nome) {
        return res.status(400).send({
            message: "Nome necessário para cadastro de produtos"
        })
    }

    if (!telefone) {
        return res.status(400).send({
            message: "Telefone necessário para cadastro de produtos"
        })
    }

    if (!produtos_desapego) {
        return res.status(400).send({
            message: "Descreva um produto para cadastro de produtos"
        })
    }

    try {

        const buscarTelefone = await produtosSchema.find({ telefone })

        if (buscarTelefone.length !== 0) {
            return res.status(400).json({ Cadastro_desapegos: `Número de telefone já cadastrado!` });
        }

        const cadastro = new produtosSchema({
            nome: nome,
            telefone: telefone,
            produtos_desapego: produtos_desapego,
            tamanho: tamanho,
            genero: genero,
            descricao: descricao

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

const buscarProdutoPorId = async (req, res) => {

    try {
        const produto = await produtosSchema.findById(req.params.id)
        res.status(200).json(produto);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const buscarTodosProdutos = async (req, res) => {
    const { produtos } = req.query;

    let query = {};

    if (produtos) query.produtos = new RegExp(produtos, 'i')

    try {
        const produtos = await produtosSchema.find(query);
        res.status(200).json({
            message: "Lista de produtos",
            produtos
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const atualizarProdutos = async (req, res) => {

    const { nome, telefone, produtos_desapego, tamanho, genero, descricao } = req.body

    try {
        const encontraPorId = await produtosSchema.findById(req.params.id)
        if (!encontraPorId) {
            return res.status(404).send({
                message: "Nenhum produto encontrado para o id buscado!"
            })
        }

        encontraPorId.nome = nome || encontraPorId.nome
        encontraPorId.telefone = telefone || encontraPorId.telefone
        encontraPorId.produtos_desapego = produtos_desapego || encontraPorId.produtos_desapego
        encontraPorId.tamanho = tamanho || encontraPorId.tamanho
        encontraPorId.genero = genero || encontraPorId.genero
        encontraPorId.descricao = descricao || encontraPorId.descricao

        const projetoAtualizado = await encontraPorId.save()

        res.status(200).json({
            message: "Projeto atualizado com sucesso!",
            projeto: projetoAtualizado
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const deletarProduto = async (req, res) => {
    try {
        const buscarProdutoPorId = await produtosSchema.findById(req.params.id)

        if (!buscarProdutoPorId) {
            return res.status(404).send({
                message: "Nenhum cadastro encontrado para o produto buscado"
            })
        }

        await buscarProdutoPorId.delete()

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
    criarCadastroProdutos,
    buscarTodosProdutos,
    buscarProdutoPorId,
    deletarProduto,
    atualizarProdutos

};
