"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var Products_1 = require("../../model/Products");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.getInstance = function () {
        if (!ProductService.INSTANCE) {
            ProductService.INSTANCE = new ProductService();
        }
        return ProductService.INSTANCE;
    };
    ProductService.prototype.createProduct = function (title, description, img) {
        var hasProduct = this.products.some(function (prod) { return prod.title === title; });
        if (hasProduct) {
            return null;
        }
        var product = new Products_1.Product(title, description, img);
        this.products.push(product);
        return product;
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
