"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var ProductService_1 = require("../../service/product/ProductService");
var ProductController = /** @class */ (function () {
    function ProductController() {
        var _this = this;
        this.createProduct = function (req, res) {
            var _a = req.body, title = _a.title, description = _a.description, img = _a.img;
            var productCreated = _this.ProductService.createProduct(title, description, img);
            if (productCreated) {
                return res.status(201).json({
                    title: productCreated.title,
                    description: productCreated.description,
                    img: productCreated.img
                });
            }
            return res.status(400).json({ error: "Produto já existe" });
        };
        this.getProducts = function (req, res) {
            var products = _this.ProductService.getProducts();
            return res.status(201).json(products);
        };
        this.ProductService = ProductService_1.ProductService.getInstance();
    }
    return ProductController;
}());
exports.ProductController = ProductController;
