const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.listen(port)