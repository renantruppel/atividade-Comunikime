"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreationController = void 0;
var UserServices_1 = require("../../service/users/UserServices");
var UserCreationController = /** @class */ (function () {
    function UserCreationController() {
        var _this = this;
        /*
        public static getInstance() {
            if(!UserCreationController.INSTANCE)
            {
                UserCreationController.INSTANCE = new UserCreationController()
            }
            return UserCreationController.INSTANCE
        }*/
        this.createUser = function (req, res) {
            var _a = req.body, nome = _a.nome, email = _a.email;
            var user = _this.userServices.createUser(nome, email);
            if (user) {
                return res.status(201).json({
                    id: user.userId,
                    nome: user.nome,
                    email: user.email,
                    admin: user.admin
                });
            }
            else {
                return res.status(400).json({ error: "não foi possível criar o usuário" });
            }
        };
        this.userServices = UserServices_1.UserServices.getInstance();
    }
    return UserCreationController;
}());
exports.UserCreationController = UserCreationController;
