require('dotenv').config()

const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())
const partsRouter = require('./routes/parts')
app.use('/parts', partsRouter)

app.listen(3000, () => console.log('Server Started'))
