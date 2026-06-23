import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";

export class userRepository{
    create(data:IUser){
        return User.create(data)
    }
    findAll(){
        return User.find()
    }
}
