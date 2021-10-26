"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreationController = void 0;
var UserServices_1 = require("../service/UserServices");
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
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    admin: user.admin
                });
            }
            else {
                return res.status(400).json({ error: "não foi possível criar o usuário" });
            }
        };
        this.getAllUsers = function (req, res) {
            var users = _this.userServices.getAllUsers();
            return res.status(201).json(users);
        };
        this.becomeAdmin = function (req, res) {
            var user_id = req.params.user_id;
            console.log("user_id: " + user_id);
            var user = _this.userServices.becomeAdmin(user_id);
            if (!user) {
                return res.status(404).json({ error: "Id não bate" });
            }
            return res.status(201).json({
                nome: user.nome,
                email: user.email,
                admin: user.admin
            });
        };
        this.getUserById = function (req, res) {
            var user_id = req.params.user_id;
            var user = _this.userServices.getUserById(user_id);
            if (!user) {
                return res.status(404).json({ error: "Id não bate" });
            }
            return res.status(201).json(user);
        };
        this.returnUsersForAdmin = function (req, res) {
            var user_id = req.headers.user_id;
            var users = _this.userServices.returnUsersForAdmin(user_id.toString());
            if (users) {
                res.status(201).json(users);
            }
            return res.status(400).json({ error: "id não pertence a um admin" });
        };
        this.userServices = UserServices_1.UserService.getInstance();
    }
    return UserCreationController;
}());
exports.UserCreationController = UserCreationController;
