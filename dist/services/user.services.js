"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../respositoy/user.repository");
class userService {
    userRepo = new user_repository_1.userRepository();
    createUser(data) {
        return this.userRepo.create(data);
    }
    getUser() {
        return this.userRepo.findAll();
    }
}
exports.userService = userService;
