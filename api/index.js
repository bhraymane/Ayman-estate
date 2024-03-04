import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import Userrouter from "./routes/user.route.js";
dotenv.config();

mongoose.connect(process.env.MONGOS).then(()=>{
    console.log('Connected Successfuly')
}).catch((err)=>{
    console.log(err)
})

const app =express()

app.listen('3000',()=>{
    console.log('Im listening to port 3000 :) ')
})


app.use('/api/user',Userrouter)