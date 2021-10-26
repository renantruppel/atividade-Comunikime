import { Product } from '../../model/Products'
import { IProductService } from './IProductService'


class ProductService implements IProductService { 

    private products: Product[]
    private static INSTANCE: ProductService

    constructor() {
        this.products = []
    }

    public static getInstance() {
        if(!ProductService.INSTANCE){
            ProductService.INSTANCE = new ProductService() 
        }
        return ProductService.INSTANCE
    }

    createProduct(title: string, description: string, img: string) {
        const hasProduct = this.products.some(prod => prod.title === title)

        if(hasProduct) {
            return null
        }
        const product = new Product(title, description, img)
        this.products.push(product)
        return product
    }

    getProducts() { 
        return this.products
    }

}


export { ProductService }