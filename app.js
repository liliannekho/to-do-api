const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const todoRoutes = require('./routes/todoRoutes')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use('/todos', todoRoutes)

module.exports = app