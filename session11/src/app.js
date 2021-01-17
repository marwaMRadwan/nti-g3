const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routes/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoutes)

app.listen(port)