// require('dotenv').config({path:"/.env"})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path :'/.env'
})
 

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`o | server is running at port ${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log("conn failed mongodb error",error)
})










/*
BASIC APPROACH

// function connectDB (){}
// connectDB()


import express from "express";
const app=express();

;(async()=>{
try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
        console.log("error:",error)
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`app listen on ${process.env.PORT}`)
    })
}catch(error){
    console.error("ERROR",error)
    throw error
}
})()

*/