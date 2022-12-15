const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtosController");
const { checkAuth } = require("../middlewares/auth");
const authController = require("../controllers/authController");



router.post("/cadastro", produtosController.criarCadastroProdutos);
router.post("/login", checkAuth, authController.login);
router.get("/todos", produtosController.buscarTodosProdutos);
router.get("/todos/:id", checkAuth, produtosController.buscarProdutoPorId)
router.delete("/:id", checkAuth, produtosController.deletarProduto);
router.patch("/:id", produtosController.atualizarProdutos)

module.exports = router;