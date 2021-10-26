import { Request, Response } from 'express'
import { IProductService } from '../../service/product/IProductService'
import { ProductService } from '../../service/product/ProductService'

class ProductController {

    private ProductService: IProductService

    constructor() {
        this.ProductService = ProductService.getInstance()
    }

    createProduct = (req: Request, res: Response) => {
        const { title, description, img } = req.body
        const productCreated = this.ProductService.createProduct(title, description, img)

        if(productCreated) {
            return res.status(201).json({
                title: productCreated.title,
                description: productCreated.description,
                img: productCreated.img
            })
        }
        return res.status(400).json({error: "Produto já existe"})
    }

    getProducts = (req: Request, res: Response) => {
        const products = this.ProductService.getProducts()

        return res.status(201).json(products)
    }

}

export { ProductController }