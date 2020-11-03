import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes.js'

const app = express()
const PORT = 4000;

app.use(bodyParser.json())

app.use('/users', userRouter)


app.listen(PORT, () => console.log(`App running on port ${PORT}`))