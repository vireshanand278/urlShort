import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";

dotenv.config();
connectDB();

const app=express();
import {nanoid} from "nanoid";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/create",(req,res)=>{
    const {url}=req.body;
    console.log(url);
    res.send(nanoid(7));
})

app.listen(5000,()=>{
    console.log("Server is runing on http://localhost:5000");
})



