"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var User_1 = require("../model/User");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.getInstance = function () {
        if (!UserService.INSTANCE) {
            UserService.INSTANCE = new UserService();
        }
        return UserService.INSTANCE;
    };
    UserService.prototype.createUser = function (nome, email) {
        var hasEmailCreated = this.users.some(function (user) { return user.email === email; });
        if (hasEmailCreated) {
            return null;
        }
        var user = new User_1.User(nome, email);
        this.users.push(user);
        return user;
    };
    UserService.prototype.getAllUsers = function () {
        return this.users;
    };
    UserService.prototype.becomeAdmin = function (id) {
        console.log(id, this.users);
        var user = this.users.find(function (user) { return user.id === id; });
        if (user) {
            user.admin = true;
            return user;
        }
        return null;
    };
    UserService.prototype.getUserById = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        if (user) {
            return user;
        }
        return user;
    };
    UserService.prototype.returnUsersForAdmin = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        if (user && user.admin === true) {
            return this.users;
        }
        return null;
    };
    return UserService;
}());
exports.UserService = UserService;
