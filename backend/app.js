import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import schema from "./src/models/shortUrl.model.js";
import shortUrl from "./src/routes/short_url.route.js";
dotenv.config();


const app=express();
import {nanoid} from "nanoid";
import { redirectFromShortUrl } from "./src/crontroller/shortUrl.controller.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create",shortUrl);


app.get("/:shortUrl",redirectFromShortUrl);

const port=process.env.PORT;
app.listen(port,()=>{
    connectDB();
    console.log(`Server is runing on ${process.env.APP_URL}`);
})



