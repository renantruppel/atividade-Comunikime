import { Purchase } from '../../model/Purchase'

interface ICart {
    title: string,
    qtd: number
}

interface IShopService {
    addToCart(title: string): void
    remFromCart(title: string): void
    finishPurchase(): Purchase
}

export { IShopService }