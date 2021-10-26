"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
var express_1 = __importDefault(require("express"));
var ProductController_1 = require("../controller/products/ProductController");
var productRoutes = (0, express_1.default)();
exports.productRoutes = productRoutes;
var productController = new ProductController_1.ProductController();
productRoutes.get('/', function (req, res) {
    productController.getProducts(req, res);
});
productRoutes.post('/products/registerProduct', function (req, res) {
    productController.createProduct(req, res);
});
