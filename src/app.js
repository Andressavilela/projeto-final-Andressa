require("dotenv").config()
const express = require ("express")
const cors = require("cors")
const database = require("./config/database")
const indexRouter = require("./routes/indexRoutes.js")

const app = express()

app.use(express.json())
app.use(cors())
database.connect()

app.use(indexRouter)

module.exports = app
