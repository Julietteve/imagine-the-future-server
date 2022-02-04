
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(compression())
app.use(cors())


module.exports = app
