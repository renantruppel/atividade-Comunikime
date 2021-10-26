"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_routes_1 = require("./users/routes/users.routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/users', users_routes_1.usersRoutes);
app.listen(3000);
