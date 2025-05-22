import express from 'express'
import dotenv from 'dotenv'


import connectDB from './src/config/mongo.config.js'

import url from './src/routes/url.route.js'
import { redirectFromShortUrl } from './src/controllers/url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors'

dotenv.config('./.env');

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use('/api/create',url);
app.get('/:id',redirectFromShortUrl);

app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`Server running at PORT : ${process.env.PORT}`);
});