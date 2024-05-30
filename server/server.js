import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/User.routes.js'
import companyRouter from './routes/Company.routes.js'

const app = express()
app.use(express.json(), cors())
app.use('/api', userRouter, companyRouter)
dotenv.config()
const PORT = process.env.PORT



app.listen(PORT, () => console.log(`This server is running on: ${PORT}`))