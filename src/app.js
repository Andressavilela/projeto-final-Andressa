require("dotenv").config()
const express = require("express")
const cors = require("cors")
const database = require("./config/database")
const indexRouter = require("./routes/indexRoutes")
const userRoutes = require("./routes/userRoutes")
const produtosRoutes = require("./routes/produtosRoutes")
const emprendedoresRoutes = require("./routes/emprendedoresRoutes")

const app = express()

app.use(express.json())
app.use(cors())

database.connect()

app.use(indexRouter)
app.use("/users", userRoutes);
app.use("/produtos", produtosRoutes);
app.use("/emprendedores", emprendedoresRoutes);

module.exports = app
