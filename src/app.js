require("dotenv").config()
const express = require ("express")
const cors = require("cors")
const database = require("./config/database")
const indexRouter = require("./routes/indexRoutes.js")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.status(200).send("OK!"))
database.connect()

app.use(indexRouter)

module.exports = app
