import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/url.model.js';
import { saveShortUrl } from '../dao/url.js'

export const createShortUrlService = async (url) => {
    const shortUrl = generateNanoId(7);
    if (!shortUrl) throw new Error('Short Url Not Generated')
    await saveShortUrl(shortUrl,url);
    return shortUrl;
  
};

export const createShortUrlWithUserService = async (url,userId) => {
    const shortUrl = generateNanoId(7);
    await saverUrl(shortUrl,url,userId);
    return shortUrl;
};


export const getUrlFromShortUrl = async (id) => {
    return await urlSchema.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
};