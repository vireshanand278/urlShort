import express from "express";

import { generateNanoId } from "../utils/helper.js";
import schema from "../models/shortUrl.model.js";

export const createShortUrlService=(url)=>{
    const shortUrl=generateNanoId(7);
    const newUrl=new schema({
        full_url:url,
        short_url:shortUrl
    });
    newUrl.save();
    console.log(url);
    return process.env.APP_URL+"/"+shortUrl;
}