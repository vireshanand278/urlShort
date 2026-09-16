
import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/sortUrl.service.js";
import wrapAsync from "../utils/tryCatchHelper.js";


export const createShortUrl=wrapAsync(async(req,res)=>{
    
        const {url}=req.body;
        console.log(url)
        const shortUrl=await createShortUrlWithoutUser(url)
        res.send(process.env.APP_URL+shortUrl);
    
})  

export const redirectFromShortUrl=wrapAsync(async(req,res)=>{
    
    const id=req.params.shortUrl;
    const url=await getShortUrl(id);
    if(url){
        res.redirect(url.full_url);

    }else{
        throw new Error("short url not found");
    }

})      