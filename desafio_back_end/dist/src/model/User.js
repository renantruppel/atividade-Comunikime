"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User(nome, email) {
        this.userId = (0, uuid_1.v4)();
        this.nome = nome;
        this.email = email;
        this.cart = [];
        this.created_at = new Date();
        this.admin = false;
    }
    return User;
}());
exports.User = User;
