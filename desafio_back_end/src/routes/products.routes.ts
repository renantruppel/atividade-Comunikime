import Router from 'express'
import { ProductController } from '../controller/products/ProductController'

const productRoutes = Router()

const productController = new ProductController()

productRoutes.get('/', (req, res) => {
    productController.getProducts(req, res)
})

productRoutes.post('/products/registerProduct', (req, res) => {
    productController.createProduct(req, res)
})

export { productRoutes }