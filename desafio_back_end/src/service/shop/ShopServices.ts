import { Purchase } from '../../model/Purchase'
import { IShopService } from './IShopServices'
import { Product } from '../../model/Products'

interface ICart {
    title: string,
    qtd: number
}

class ShopService implements IShopService { 

    private cart: ICart[]
    private purchases: Purchase[]
    private static INSTANCE: ShopService

    constructor() {
        this.cart = []
        this.purchases = []
    }

    public static getInstance() {
        if(!ShopService.INSTANCE){
            ShopService.INSTANCE = new ShopService() 
        }
        return ShopService.INSTANCE
    }

    addToCart(title: string): void {
        
        this.cart.map((prod,index) => {
            if(prod[index].title === title) {
                prod[index].qtd += 1
                return prod[index]
            }
        })
        this.cart.push({title: title, qtd: 1})
    }

    remFromCart(title: string): void {
        this.cart.map((prod,index) => {
            if(prod[index].title === title) {
                prod[index].qtd -= 1
                if(prod[index].qtd === 0) {
                    this.cart.splice(index, 1)
                }
                return
            }
        })
    }

    finishPurchase(): Purchase { 
        const shop = new Purchase(this.cart)
        this.purchases.push(shop)
        this.cart = []
        return shop
    }

}


export { ShopService }