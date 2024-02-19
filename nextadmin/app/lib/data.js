import {User} from "./models"
import { connectToDB } from "./utils";


export const fetchUsers = async () =>{
    try{
        connectToDB();
        const users = User.find();
        return users;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!",err)
    }
}