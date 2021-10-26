"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserServices_1 = require("../../../users/service/UserServices");
describe("CreateUserUseCase", function () {
    var createUserUseCase;
    var usersRepository;
    beforeAll(function () {
        usersRepository = new UserServices_1.UserService();
        //createUserUseCase = new CreateUserUseCase(usersRepository);
    });
    it("should be able to create new users", function () {
        var nome = "Danilo Vieira";
        var email = "danilo@rocketseat.com";
        var user = usersRepository.createUser(nome, email);
        expect(usersRepository.getAllUsers()).toStrictEqual([user]);
    });
    it("should not be able to create new users when email is already taken", function () {
        /* Teste não aplicável para meu arquivo */
    });
});
