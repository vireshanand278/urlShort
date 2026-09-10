import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import schema from "./src/models/shorturl.model.js";

dotenv.config();


const app=express();
import {nanoid} from "nanoid";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/create",(req,res)=>{
    const {url}=req.body;
    const shortUrl=nanoid(7);
    const newUrl=new schema({
        full_url:url,
        short_url:shortUrl
    });
    newUrl.save();
    console.log(url);
    res.send(nanoid(7));
})

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



