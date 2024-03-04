import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import Userrouter from "./routes/user.route.js";
import authrouter from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGOS).then(()=>{
    console.log('Connected Successfuly')
}).catch((err)=>{
    console.log(err)
})

const app =express()

app.use(express.json())

app.listen('3000',()=>{
    console.log('Im listening to port 3000 :) ')
})


app.use('/api/user',Userrouter)
app.use('/api/auth',authrouter)