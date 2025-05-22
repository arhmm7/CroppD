import { createShortUrlService, getUrlFromShortUrl } from "../services/url.service.js";
import { BadRequestError } from "../utils/errorHandler.js";


export const  createShortUrl = async (req,res,next) => {
    try {
        const { url } = req.body;
        const shortUrl = await createShortUrlService(url);
        res.send("https://croppd-backend.onrender.com/" + shortUrl);
    }
    catch(err) {
        next(err);
    }
};

export const  redirectFromShortUrl = async (req,res) => {
    const {id} = req.params;
    const url = await getUrlFromShortUrl(id);
    if(url) {
        res.redirect(url.full_url);
    }
    else {
        res.send('Not Found').status(404);
    }
    
}
