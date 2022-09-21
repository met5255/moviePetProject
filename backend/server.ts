import express, { Express, Request, Response } from 'express';
import {json, urlencoded} from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import filmRoutes from './routes/filmRoutes'

dotenv.config();

const app: Express = express();
app.use(json());
app.use(urlencoded({extended: true}));

const allowOrigins = ["http://localhost:3001","http://localhost:3000"];
const corsOptions: cors.CorsOptions = {
    origin: allowOrigins
}

app.use(cors(corsOptions));
const port = process.env.PORT;


app.use('/api/v1/films', filmRoutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});