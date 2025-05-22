import { ConflictError } from "../utils/errorHandler.js";
import urlSchema from '../models/url.model.js'

export const saveShortUrl = async(shortUrl , longUrl, userId) => {
    
    try {
        const newUrl = new urlSchema({
            full_url:longUrl,
            short_url:shortUrl
        });

        if(userId) {
            newUrl.user_id = userId;
        }
         await newUrl.save();
    }
    catch(err) {
        throw new ConflictError(err);
    }
   
}
