import shortUrl from "../models/shortUrl.model.js";


export const saveShortUrl=(shortUrl,longUrl,userID)=>{
    const newUrl=new shortUrl({
        full_url:longUrl,
        short_url:shortUrl,
    });
    if(userID){
        newUrl.user=userID
    }
    newUrl.save();
}

export const getShortUrl=async(id)=>{
    return await shortUrl.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
}