const express = require("express");
const router = express.Router();

const emprendedoresController = require("../controllers/emprendedoresController");
const { checkAuth } = require("../middlewares/auth");

router.post("/cadastro", emprendedoresController.criarCadastroEmpreendedores);
router.get("/todos", emprendedoresController.buscarTodosEmprendedores);
router.get("/todos/:id", checkAuth, emprendedoresController.buscarEmprendedoresPorId)
router.delete("/:id", checkAuth, emprendedoresController.deletarCadastro);
router.patch("/:id", emprendedoresController.atualizarEmprendedores)

module.exports = router;