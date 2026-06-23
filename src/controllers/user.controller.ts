import { Request,Response } from "express";
import { userService } from "../services/user.services";

const userServices = new userService()

export class userController{
    static async userCreate(req:Request,res:Response){
        let data = await userServices.createUser(req.body)
        if(data){
            res.status(201).json({
                message:"User Added",
                data:data
            })
        }
    }
    static async getUser(req:Request,res:Response){
        let data = await userServices.getUser()
        if(data){
            res.status(201).json({
                message:"User Fetched",
                data:data
            })
        }
    }
}