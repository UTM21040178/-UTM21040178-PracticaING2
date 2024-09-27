import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("la base de datos funciona")
})
.catch((error)=>{
    console.log("la base de datos no funciona", error)
})

const app = express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("se escucha bien")
})

test()