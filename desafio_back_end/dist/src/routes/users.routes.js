"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserCreationController_1 = require("../controller/users/UserCreationController");
var usersRoutes = (0, express_1.Router)();
var userCreationController = new UserCreationController_1.UserCreationController();
/*usersRoutes.get('/getAllUsers', (req, res) => {
    userCreationController.getAllUsers(req, res)
})*/
usersRoutes.post('/', function (req, res) {
    userCreationController.createUser(req, res);
});
/*usersRoutes.patch('/:user_id/admin', (req, res) => {
    userCreationController.becomeAdmin(req, res)
})

usersRoutes.get('/:user_id', (req, res) => {
    userCreationController.getUserById(req, res)
})

usersRoutes.get('/', (req, res) => {
    userCreationController.returnUsersForAdmin(req, res)
})

export {usersRoutes}*/ 
