import express from 'express'
import { routes } from './routes'

var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)


app.listen(8080, () => {
    console.log("server running on port 8080")
})
