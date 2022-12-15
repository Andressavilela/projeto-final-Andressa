const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  const emailExists = await UserSchema.exists({ email: req.body.email })

  if (emailExists) {
    return res.status(409).send({
      message: 'Email já cadastrado',
    })
  }

  try {
    const newUser = new UserSchema(req.body)

    const savedUser = await newUser.save()

    res.status(201).send({
      message: 'Usuário cadastrado com sucesso!',
      savedUser,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: err.message,
    })
  }
}

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(users)
  })
}

const buscarUsuarioPorId = async (req, res) => {

  try {
    const users = await UserSchema.findById(req.params.id)
    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const buscarUsuarioPorId = await UserSchema.findById(req.params.id)

    if (!buscarUsuarioPorId) {
      return res.status(404).send({
        message: "Nenhum cadastro encontrado para o usuário buscado"
      })
    }

    await buscarUsuarioPorId.delete()

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
  getAll,
  createUser,
  buscarUsuarioPorId,
  deleteUser
}