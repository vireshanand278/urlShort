import { generateNanoId } from "../utils/helper";

export const createShortUrl=async(req,res)=>{
    const {url}=req.body;
    const shortUrl=generateNanoId(7);
    const newUrl=new schema({
        full_url:url,
        short_url:shortUrl
    });
    newUrl.save();
    console.log(url);
    res.send(shortUrl);
}