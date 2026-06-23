import mongoose,{Schema} from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
    password:{type:String}
})

const User = mongoose.model<IUser>('users',userSchema)

export default User