import {v4 as uuidV4} from 'uuid'

class Product {
    //productId: string;
    title: string;
    description: string;
    img: string;

    constructor(_title: string, _description: string, _img: string) {
        //this.productId = uuidV4(); ID deve ser usado, porém neste caso
        //não coloquei por não achar necessário
        this.title = _title;
        this.description = _description;
        this.img = _img;
    }
}

export { Product }

