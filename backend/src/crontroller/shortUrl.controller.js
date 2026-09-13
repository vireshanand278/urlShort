import express from "express";
import { createShortUrlService } from "../services/sortUrl.service.js";
const router=express();
router.use(express.json());

export const createShortUrl=async(req,res)=>{
    const {url}=req.body;
    console.log(url)
    const shortUrl=await createShortUrlService(url)
    res.send(shortUrl);
}