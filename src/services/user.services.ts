import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../respositoy/user.repository";

export class userService{
    private userRepo = new userRepository()
    createUser(data:IUser){
        return this.userRepo.create(data)
    }
    getUser(){
        return this.userRepo.findAll()
    }
}