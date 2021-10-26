import { Request, Response } from 'express'
import { ShopService } from '../../service/shop/ShopServices'
import { IShopService } from '../../service/shop/IShopServices'


class ShopController {
    private ShopService: IShopService

    constructor() {
        this.ShopService = ShopService.getInstance()
    }

    addToCart(req: Request, res: Response) {
        const {title} = req.body
        this.ShopService.addToCart(title)
        return res.status(201).json()
    }

    remFromCart(req: Request, res: Response) {
        const {title} = req.body
        this.ShopService.remFromCart(title)
        return res.status(201).json()
    }

    finishPurchase(req: Request, res: Response) {
        this.ShopService.finishPurchase()
        return res.status(201).json()
    }
}

export { ShopController }