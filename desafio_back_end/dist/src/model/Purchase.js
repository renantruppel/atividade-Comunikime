"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
var Purchase = /** @class */ (function () {
    function Purchase(_userId, _cart) {
        //this.purchaseId = uuidV4();
        //this.userId = _userId;
        this.cart = _cart;
        this.purchaseDate = new Date();
    }
    return Purchase;
}());
exports.Purchase = Purchase;
