import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import schema from "./src/models/shortUrl.model.js";
import shortUrl from "./src/routes/short_url.route.js";
dotenv.config();


const app=express();
import {nanoid} from "nanoid";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/create",shortUrl);
app.get("/:shortUrl",async(req,res)=>{
    const id=req.params.shortUrl;
    const url=await schema.findOne({short_url:id});
   
    if(url){
        res.redirect(url.full_url);
    }else{
        res.status(404).send("URL not found");
    }
});

app.listen(5000,()=>{
    connectDB();
    console.log("Server is runing on http://localhost:5000");
})



