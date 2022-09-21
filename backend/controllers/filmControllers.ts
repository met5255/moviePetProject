import { RequestHandler, Request, Response } from "express"
import axios from "axios"

const headers:HeadersInit = {
    'Content-Type':"application/json",
    'mode': 'cors'
}

export const getFilmsWithPagination = async (req: Request<{ page: number}>, res:Response) => {
    const {page} = req.params;
    const films =  await axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',{headers});
    const sendData = { 
        allPage: Math.ceil(films.data.movies.length/5),
        movies: films.data.movies.slice(page * 5, (page * 5) + 5)
    }
    res.status(200).json(sendData);
}

export const getAllFilms:RequestHandler = async (req, res, next) => {
    const films =  await axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',{headers});
    res.status(200).send(films.data);
}