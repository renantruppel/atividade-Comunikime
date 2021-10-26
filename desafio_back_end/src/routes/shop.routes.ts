import Router from 'express'
import { ShopController } from '../controller/shop/ShopController'

const shopRoutes = Router()

const shopController = new ShopController()

shopRoutes.patch('/add/:title', (req, res) => {
    shopController.addToCart(req, res)
})

shopRoutes.patch('/remove/:title', (req, res) => {
    shopController.remFromCart(req, res)
})

shopRoutes.patch('/purchase', (req, res) => {
    shopController.finishPurchase(req, res)
})

export { shopRoutes}

