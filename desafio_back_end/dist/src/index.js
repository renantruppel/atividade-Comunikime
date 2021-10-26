"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_routes_1 = require("./routes/products.routes");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
    req.headers['Access-Control-Allow-Origin'] = '*';
    next();
});
app.use('/', products_routes_1.productRoutes);
app.listen(5000);
