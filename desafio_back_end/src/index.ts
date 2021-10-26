import express from 'express'
import { productRoutes } from './routes/products.routes'
import { shopRoutes } from './routes/shop.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', productRoutes)
app.use('/shop', shopRoutes)

app.listen(5000)
