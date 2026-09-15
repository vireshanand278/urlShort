
import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/sortUrl.service.js";


export const createShortUrl=async(req,res)=>{
    try{
        const {url}=req.body;
        console.log(url)
        const shortUrl=await createShortUrlWithoutUser(url)
        res.send(process.env.APP_URL+shortUrl);
    }catch(e){
        next(e);
    }
    
}

export const redirectFromShortUrl=async(req,res)=>{
    const id=req.params.shortUrl;
    const url=await getShortUrl(id);
   
   
    if(url){
        res.redirect(url.full_url);

    }else{
        res.status(404).send("URL not found");
    }
}    