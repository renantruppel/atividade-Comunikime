import {v4 as uuidV4} from 'uuid'

import { Product } from './Products'


interface ICart {
    title: string,
    qtd: number
}

class Purchase {
    purchaseId: string; 
    cart: ICart[];
    purchaseDate: Date;

    constructor(_cart: ICart[]) {
        this.purchaseId = uuidV4();
        //this.userId = _userId;
        this.cart = _cart;
        this.purchaseDate = new Date();
        
    }
}

export { Purchase }