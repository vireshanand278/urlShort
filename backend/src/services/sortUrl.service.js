

import { generateNanoId } from "../utils/helper.js";

import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser=async(url)=>{
    const shortUrl=await generateNanoId(7);
    await saveShortUrl(shortUrl,url);
    return process.env.APP_URL+"/"+shortUrl;
}

export const createShortUrlWithUser=async(url,user)=>{
    const shortUrl=await generateNanoId(7);
    await saveShortUrl(shortUrl,url,user);
    return process.env.APP_URL+"/"+shortUrl;
}