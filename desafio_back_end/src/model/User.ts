import {v4 as uuidV4} from 'uuid'

import { Product } from './Products'

class User {
    userId: string;
    nome: string;
    email: string;
    created_at: Date;
    cart: Array<Product>;
    admin: boolean;

    constructor(nome: string, email: string) {
        this.userId = uuidV4();
        this.nome = nome;
        this.email = email;
        this.cart = [];
        this.created_at = new Date();
        this.admin = false;
    }
}


export {User}