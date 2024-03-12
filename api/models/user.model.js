import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
        type:"string",
        required: true,
        unique:true,
    },
    Profilename :{
        type:"string",
        default:"Profile"
    },
    email :{
        type:"string",
        required: true,
        unique:true,
    },
    password :{
        type:"string",
        required: true,
    },
    avatar:{
        type:"string",
        default:'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'
    }
},{timestamps:true})


const User = mongoose.model('User',userSchema)


export default User