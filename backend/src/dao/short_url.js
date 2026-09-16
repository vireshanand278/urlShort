import shortUrl from "../models/shortUrl.model.js";
import { ConflictError } from "../utils/errorHandler.js";


export const saveShortUrl=async (shortUrl,longUrl,userID)=>{
    try{
    const newUrl=new shortUrl({
        full_url:longUrl,
        short_url:shortUrl,
    });
    if(userID){
        newUrl.user=userID
    }
    await newUrl.save();
    }catch(e){
        if(e.code==1100){
            throw new ConflictError("Short url alredy exist");
        }
        throw new Error (e);
    }
}

export const getShortUrl=async(id)=>{
    return await shortUrl.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
}