import { RequestHandler, Request, Response } from "express"
import axios from "axios"
import { addAbortSignal } from "stream";

const headers:HeadersInit = {
    'Content-Type':"application/json",
    'mode': 'cors'
}

export const getFilmsWithPagination = async (req: Request<{page: number}>, res: Response) => {
    const { page } = req.params;
    const films =  await axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',{headers});
    const filmsFrom = page * 5;
    const responseData = {
        pageNumbers: Math.ceil(films.data.movies / 5),
        movies: films.data.movies.slice(filmsFrom, 5)
    }
    res.status(200).send(responseData);
}

export const getAllFilms:RequestHandler = async (req, res, next) => {
    const films =  await axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',{headers});
    res.status(200).send(films.data);
}