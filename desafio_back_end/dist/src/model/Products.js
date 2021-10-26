"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(_title, _description, _img) {
        //this.productId = uuidV4(); ID deve ser usado, porém neste caso
        //não coloquei por não achar necessário
        this.title = _title;
        this.description = _description;
        this.img = _img;
    }
    return Product;
}());
exports.Product = Product;
