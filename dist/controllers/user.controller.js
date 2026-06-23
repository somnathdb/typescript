"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_services_1 = require("../services/user.services");
const userServices = new user_services_1.userService();
class userController {
    static async userCreate(req, res) {
        let data = await userServices.createUser(req.body);
        if (data) {
            res.status(201).json({
                message: "User Added",
                data: data
            });
        }
    }
    static async getUser(req, res) {
        let data = await userServices.getUser();
        if (data) {
            res.status(201).json({
                message: "User Fetched",
                data: data
            });
        }
    }
}
exports.userController = userController;
