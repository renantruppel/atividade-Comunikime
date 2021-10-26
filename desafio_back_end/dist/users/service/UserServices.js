"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var User_1 = require("../model/User");
var UserService = /** @class */ (function () {
    //private static INSTANCE: any;
    function UserService() {
        this.users = [];
    }
    /*private getUserList(): User[] {
        if(!UserService.INSTANCE) {
            this.users = []
        }
        return this.users
    }*/
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
        var user = this.users.find(function (user) { return user.id === id; });
        if (user) {
            user.admin = true;
            return user;
        }
        return user;
    };
    UserService.prototype.getUserById = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        if (user) {
            return user;
        }
        return user;
    };
    UserService.prototype.returnUsersForAdmin = function (id) {
        var isAdmin = this.users.some(function (user) { return user.id === id; });
        if (isAdmin) {
            return this.users;
        }
        return null;
    };
    return UserService;
}());
exports.UserService = UserService;
