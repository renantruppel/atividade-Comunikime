import { Product } from '../../model/Products'

interface IProductService {
    createProduct(title: string, description: string, img: string): Product
    getProducts(): Product[]
}

export { IProductService }